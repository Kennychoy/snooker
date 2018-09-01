import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ContactIcons extends Component {
	render(){
		return (
			<div className="main-top-contacts">
				<div className="main-top-contacts-icon">
					<i className={this.props.icon}></i>
				</div>
				<div className="main-top-contacts-text">
					<div className="main-top-contacts-desc">{this.props.desc}</div>
					<div className="main-top-contacts-email">{this.props.email}</div>
				</div>
			</div>
		);
	}
}

export default ContactIcons;