import React from "react";
import layers from "../../img/layers.png";
import cogwheel from "../../img/cogwheel.png";
import pen from "../../img/pen.png";
import browser from "../../img/browser.png";
import myImage from "../../img/myImage.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className="hidden">
					About
				</h1>
				<div className="row mt-5">
					<div className="col-6 col-sm-6 col-md-3 hidden">
						<img src={layers} />
						<h4>Responsive</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3 hidden">
						<img src={pen} />
						<h4>Design</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3 hiddenRight">
						<img src={cogwheel} />
						<h4>Performance</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3 hiddenRight">
						<img src={browser} />
						<h4>Agile</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className="img-fluid"
							src={myImage}
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className="mytext pt-3">
							I love to transform ideas into reality using code. I
							am passionate about using Javascript and animations
							to create awesome user experiences.
						</p>
					</div>
					<div className="col-12 col-sm-12 col-md-6 hiddenRight">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								VanillaJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}