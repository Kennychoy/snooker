import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

import Standings from "./Standings.js";
import PlayerAwards from "./PlayerAwards.js";
import AboutFollowUs from "./AboutFollowUs.js";
import PlayerNews from "./PlayerNews.js";

import "./AboutSidebar.css";

class AboutSidebar extends Component {
	render(){
		return (
			<div className="about-sidebar">
				<Row>
					<Col lg="12" md="6" xs="12" className="about-sidebar-single">
						<Standings />
					</Col>
					<Col lg="12" md="6" xs="12" className="about-sidebar-single">
						<PlayerAwards />
					</Col>
					<Col lg="12" md="6" xs="12" className="about-sidebar-single">
						<AboutFollowUs />
					</Col>
					<Col lg="12" md="6" xs="12" className="about-sidebar-single">
						<PlayerNews />
					</Col>
				</Row>
			</div>
		);
	}
}

export default AboutSidebar;