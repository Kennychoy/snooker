import React, { Component } from 'react';

class HomeSubscribe extends Component {
	render(){
		return (
			<div className="home-subscribe col-lg-12 col-md-6 col-12">
			
				<div className="homepage-titles follow-us-title">								
					<h5>SUBSCRIBE</h5>
				</div>
				
				<form className="home-subscribe-form">
					<div className="input-group input-group-lg">
						<input type="text" className="form-control" placeholder="Enter your email here" />
						<div className="input-group-append">
							<button className="btn btn-success" type="submit">
								<i className="far fa-envelope-open"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default HomeSubscribe;