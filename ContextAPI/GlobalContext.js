import React,{createContext,useState, useEffect, useReducer} from "react"
import {AppReducer} from './AppReducer'

const initialState = {input:''}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    return(
        <GlobalContext.Provider value={
            {
                Input:state.input,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

// export const contex