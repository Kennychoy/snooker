import React, { Component } from 'react';
import HomeCarousel from "./HomeCarousel";
import SecondaryCarousel from "./SecondaryCarousel";
import UpcomingEvent from "./UpcomingEvent";
import SpotlightNews from "./SpotlightNews";
import HomeBottomCarousel from "./HomeBottomCarousel";

class Home extends Component {
	render(){
		return (
			<div className="home">
				<HomeCarousel />
				<SecondaryCarousel />
				<UpcomingEvent />
				<SpotlightNews />
				<HomeBottomCarousel />				
			</div>
		)
	}
}

export default Home;