import React, { Component } from 'react';
import {Link} from "react-router-dom";

class FollowUs extends Component {
	render(){
		return (
			<div className="follow-us col-lg-12 col-md-6 col-12">
			
				<div className="homepage-titles follow-us-title">								
					<h5>FOLLOW US</h5>								
				</div>
				
				<div className="follow-icon-wrapper">
				
					<div className="follow-icon-outer">
						<div className="follow-icon-inner">
							<Link to="#"><i className="fab fa-facebook-f fa-fw"></i></Link>
						</div>
					</div>
					<div className="follow-icon-outer">
						<div className="follow-icon-inner">
							<Link to="#"><i className="fab fa-twitter fa-fw"></i></Link>
						</div>
					</div>
					<div className="follow-icon-outer">
						<div className="follow-icon-inner">
							<Link to="#"><i className="fab fa-google-plus-g fa-fw"></i></Link>
						</div>
					</div>
					<div className="follow-icon-outer">
						<div className="follow-icon-inner">
							<Link to="#"><i className="fab fa-instagram fa-fw"></i></Link>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default FollowUs;