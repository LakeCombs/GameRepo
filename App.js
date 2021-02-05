import React, { useReducer } from "react";
import { GlobalProvider } from "./ContextAPI/GlobalContext";
import Game from "./GamePart/Game";
import "./GamePart/Game.css"

function App() {
	return (
		// <GlobalProvider>
			<center>
				<Game />
			</center>
		// </GlobalProvider>
	);
}

export default App;
