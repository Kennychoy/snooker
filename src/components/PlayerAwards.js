import React, { Component } from 'react';

import PageTitle from "./PageTitle.js";
import AboutCarousel from "./AboutCarousel";

import "./PlayerAwards.css";

class PlayerAwards extends Component {
	render(){
		return (
			<div id="player-awards" className="col-12">
				<PageTitle 
					title="PLAYER AWARDS" 					
				/>
				<AboutCarousel />
			</div>
		);
	}
}

export default PlayerAwards;