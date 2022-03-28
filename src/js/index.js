//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/home.jsx";

let count = 0;

setInterval(() => {
	const numberSix = Math.floor(count / 100000) % 10;
	const numberFive = Math.floor(count / 10000) % 10;
	const numberFour = Math.floor(count / 1000) % 10;
	const numberThree = Math.floor(count / 100) % 10;
	const numberTwo = Math.floor(count / 10) % 10;
	const numberOne = Math.floor(count / 1) % 10;

	count++;
	//render your react application
	ReactDOM.render(
		<SecondsCounter
			numOne={numberOne}
			numTwo={numberTwo}
			numThree={numberThree}
			numFour={numberFour}
			numFive={numberFive}
			numSix={numberSix}
		/>,
		document.querySelector("#app")
	);
}, 1000);
