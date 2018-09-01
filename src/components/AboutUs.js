import React, { Component } from 'react';
import {Link} from "react-router-dom";

import PagePortal from "./PagePortal.js";
import AboutMain from "./AboutMain";
import "./AboutUs.css";

class AboutUs extends Component {
	render(){
		return (
			<div className="about-us">
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				<AboutMain />
			</div>
		);
	}
}

export default AboutUs;