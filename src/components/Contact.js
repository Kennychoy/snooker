import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import "./Contact.css";
import GoogleMap from "./Map";

class Contact extends Component {
	render(){
		return (
			<div className="contact">
				<div className="contact-form">
					<div className="container">
						<div className="row">
						
							<div className="col-lg-8 col-12 get-in-touch">
								<PageTitle title="GET IN TOUCH" />
								<form>
									<fieldset>
										<input type="text" placeholder="YOUR NAME" className="col-md-6 col-12"/>
										<input type="tel" placeholder="PHONE" className="col-md-6 col-12" />
										<textarea rows="5"></textarea>
										<input type="email" placeholder="YOUR EMAIL" className="col-md-6 col-12"/>
										<button>SEND MESSAGE</button>
									</fieldset>
								</form>
							</div>
							
							<div className="col-lg-4 col-12 contact-details">
								<PageTitle title="CONTACT DETAILS" />
								<div className="details-wrapper">
									<div className="details-single">
										<div className="details-desc">EMAIL</div>
										<div className="icon-text">
											<div className="details-icon"><i className="far fa-envelope"></i></div>
											<div className="details-text">info@snooker.com</div>
										</div>
									</div>
									<div className="details-single">
										<div className="details-desc">ADDRESS</div>
										<div className="icon-text">
											<div className="details-icon"><i className="fas fa-map-marker"></i></div>
											<div className="details-text">No. 1, First Street, Middle City</div>
										</div>
									</div>
									<div className="details-single">
										<div className="details-desc">PHONE</div>
										<div className="icon-text">
											<div className="details-icon"><i className="fas fa-phone"></i></div>
											<div className="details-text">012-345-678</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="map">
					<GoogleMap />
				</div>
			</div>
		);
	}
}

export default Contact;