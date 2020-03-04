import React from "react";
import weather from "../img/weather.jpg";
import aguaDeLuz from "../img/aguaDeLuz.png";
import movies from "../img/movies.jpg";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className="project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Weather App</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											See More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Aguas De Luz</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											See More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Movie App</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											See More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={weather} alt="Weather App"/>
						</div>
						<div className="modal-info">
							<h2>Weather App</h2>
							<div className="modal-description">
								<ul>
									<li>
										React Weather Application.
										Provides information about
										the temperature of cities 
										around the world.
									</li>
									<li>
										Designed with HTML5, CSS3, Bootstrap											 and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
								href="https://xph03nix.github.io/weather"
								target="_blank"
								rel="noreferrer noopener">
								<h4>View live demo</h4>
								</a>
								<a
								href="https://github.com/xPh03niX/weather"
								target="_blank"
								rel="noreferrer noopener">
								<h4>GitHub Repo</h4>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={valentine} alt="valentine animation"/>
						</div>
						<div className="modal-info">
							<h2>Valentine</h2>
							<div className="modal-description">
								<ul>
									<li>
										Valentine animation made with love
									</li>
									<li>
										Developed with HTML5, CSS3 and VanillaJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://xph03nix.github.io/love"
									target="_blank"
									rel="noreferrer noopener">
									<h4>View live demo</h4>
								</a>
								<a
									href="https://github.com/xPh03niX/love"
									target="_blank"
									rel="noreferrer noopener">
									<h4>GitHub Repo</h4>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={movies} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Movie App</h2>
							<div className="modal-description">
								<ul>
									<li>
										A movie app developed using React with the MovieDB API.
									</li>
									<li>
										Developed with HTML5, CSS3,
										ReactiveSearch, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a 
									href="https://xph03nix.github.io/DbApp/" 
									target="_blank"
									rel="noreferrer noopener">
									<h4>View live demo</h4>
								</a>
								<a
									href="https://github.com/xPh03niX/DbApp"
									target="_blank"
									rel="noreferrer noopener">
									<h4>GitHub Repo</h4>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
