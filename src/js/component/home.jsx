import React from "react";
import PropTypes from "prop-types";
//create your first component

const SecondsCounter = (props) => {
	return (
		<>
			<div className="container">
				<div className="row contador">
					<div className="counterNumbers d-flex justify-content-center mt-3">
						<div className="counter">
							<i className="far fa-clock"></i>
						</div>
						<div className="counter">{props.numSix}</div>
						<div className="counter">{props.numFive}</div>
						<div className="counter">{props.numFour}</div>
						<div className="counter">{props.numThree}</div>
						<div className="counter">{props.numTwo}</div>
						<div className="counter">{props.numOne}</div>
					</div>
				</div>
			</div>
		</>
	);
};

SecondsCounter.propTypes = {
	numOne: PropTypes.number,
	numTwo: PropTypes.number,
	numThree: PropTypes.number,
	numFour: PropTypes.number,
	numFive: PropTypes.number,
	numSix: PropTypes.number,
};

export default SecondsCounter;
