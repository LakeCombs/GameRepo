import React from "react";
import "./Header.css";

function Header() {
	return (
		<div
			style={{
				height: "60px",
				width: "100%",
				display: "flex",
				alignItems: "center",
				backgroundColor: "blue",
				justifyContent: "center",
			}}>
			<center style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
				The Guessing Game
			</center>
		</div>
	);
}

export default Header;
