import React, { useState, useEffect } from "react";
import "./GameBody.css";
import pix from "../Images/Dice.png";
import congrat from "../Images/Win.gif";
import tryagain from "../Images/try.gif";

function GameBody() {
	// const [win, setWin] = useState(false);
	// const [comp, setComp] = useState("");
	// const [youChoose, setYouChoose] = useState("");
	// // const [choose, setChoose] = useState(false)

	// const computer = Math.floor(Math.random() * 10);

	// // let x = document.getElementsById("YouChoose")
	// // let y = document.getElementsById('ComputerChoose')

	// const newSet =()=>{
	// 	setYouChoose(setInput)
	// }

	// const Check = () => {
	// 	if (input > 10) {
	// 		alert("enter a number between 1 to 10");
	// 	}else if (computer === input) {

	// 		setWin(!win);
	// 		setComp(computer)
	// 		// x.innerHTML = "You guessed "+ {input}
	// 	} else {
	// 		setWin(win);
	// 	}

	//     setInput("")
	//     setComp(computer)
	// 	console.log("computer choose" + "" + computer);
	// 	console.log("you choose" + "" + input);

	// 	// setYouChoose=x.innerHTML(`you choosed ${input}`)
	// 	// setComp = x.innerHTML(`computer choose ${computer}`)

	// }
	// const IChoose =(e)=>{
	// 	setYouChoose(setInput)
	// }

	// useEffect((e) => {
	//     setComp(computer)
	//     setYouChoose(input)

	//     const letRide =()=>{
	//         setYouChoose(youChoose)
	// 	}

	// }, [setComp, setYouChoose])

	let y = document.getElementById("ComputerChoose");
	let z = document.getElementById("YouChoose");
	const pla = document.getElementById("decide");
	let comp = Math.floor(Math.random() * 11);
	const [input, setInput] = useState("");
	const [win, setWin] = useState(false)
	// const [win, setWin] = useState(null);
	// const winchecker =()=>{
	// 	setWin(!win)
	// }

	const checker = () => {
		if (input > 10) {
			alert("Put a value between 0 - 10");
		} else if (input < 0) {
			alert("Check if the value is in range");
			setWin(win)
		} else {
			if (input == comp) {
				z.innerHTML = "You choose " + input;
				y.innerHTML = "Computer choose:" + comp;
				pla.innerHTML = "You win";
				setWin(!win);
			} else if (input == "") {
				alert("enter a number from 0 - 10");
				y.innerHTML = "Computer choose:";
				z.innerHTML = "You choose "
			
				setWin(win)
			} else if (input != comp) {
				z.innerHTML = "You choose " + input;
				y.innerHTML = "Computer choose: " + comp;
				pla.innerHTML = "You lost";
				setWin(false)
			} else {
				alert("enter a valid value");
			}
		}
		setInput("");
	};

	return (
		<div className="bodyHolder">
			<div className="gameDisplay">
				<img src={pix} className="dice" />
			</div>
			<div className="Interbutton">
				<input
					value={parseInt(input)}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					type="number"
					placeholder="enter a number from 0 to 10"
					className="Input"
				/>

				<button className="button" onClick={checker}>
					Play
				</button>
			</div>

			<div className="ResultPallet">
				<h2 className="text" id="YouChoose">
					{" "}
					you choose: {""}{" "}
				</h2>
				<h2 className="text" id="ComputerChoose">
					Computer Choose: {""}
				</h2>
				<h2 className="text" id="decide">
					{" "}
					{""}
				</h2>
			</div>
			{win ? (
				<center className="ResultMenu">
					<img src={congrat} className="ResultImage2" />
				</center>
			) : (
				<center className="ResultMenu">
					<img src={tryagain} className="ResultImage2" />
				</center>
			)}
		</div>
	);
}

export default GameBody;
