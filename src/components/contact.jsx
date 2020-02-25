import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ""
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<form
					onSubmit={ this.submitForm }
					className={ this.props.shake }
					action="https://formspree.io/xrgkpkbn"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message"
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
						{ status === "SUCCESS" ? <p>Thanks! Got your message!</p> :	
							<button
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button> }
						{ status === "ERROR" && <p>Ooops! There was an error.</p> }
						</div>
					</div>
				</form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState ({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
