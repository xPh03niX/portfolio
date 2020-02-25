import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://codepen.io/xph03nix"
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" src={codepen} 
								alt="My CodePen"/>
							</a>
							<a
								className="px-3"
								href="https://github.com/xPh03niX"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} 
								alt="My GitHub"/>
							</a>
							<a
								href="https://www.linkedin.com/in/henri-herrera-154312162"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} 
								alt="My LinkedIn"/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Made with &hearts; by Henri Herrera</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
