import React, { Component } from 'react';
import "./HomeCarousel.css";

class HomeCarousel extends Component {
	render(){
		return (
			<div id="homeCarousel" className="carousel slide carousel-fade" data-ride="carousel">
				
				<ul className="carousel-indicators">
					<li data-target="#homeCarousel" data-slide-to="0" className="active">
						<div className="indicator-circle"></div>
						<div className="indicator-text">01</div>
					</li>
					<li data-target="#homeCarousel" data-slide-to="1">
						<div className="indicator-circle"></div>
						<div className="indicator-text">02</div>
					</li>
					<li data-target="#homeCarousel" data-slide-to="2">
						<div className="indicator-circle"></div>
						<div className="indicator-text">03</div>
					</li>
				</ul>
				
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="http://kennytesting.000webhostapp.com/snooker/img/homeCarousel-1.jpg" alt=""/>
						<div className="carousel-caption">
							<h1>Lorem ipsum dolor sit amet</h1>
							<h3>Sed tincidunt commodo elit, vitae hendrerit ex sodales at.</h3>
							<button type="button" formAction="#">READ MORE</button>
						</div>
					</div>
					<div className="carousel-item">
						<img src="http://kennytesting.000webhostapp.com/snooker/img/homeCarousel-2.jpg" alt=""/>
						<div className="carousel-caption">
							<h1>Donec interdum justo vitae</h1>
							<h3>Vivamus ut magna eget ex suscipit semper ut vitae purus.</h3>
							<button type="button" formAction="#">READ MORE</button>
						</div>
					</div>
					<div className="carousel-item">
						<img src="http://kennytesting.000webhostapp.com/snooker/img/homeCarousel-3.jpg" alt=""/>
						<div className="carousel-caption">
							<h1>Praesent ut urna aliquam</h1>
							<h3>Quisque eget enim sit amet nisi fringilla faucibus semper ut</h3>
							<button type="button" formAction="#">READ MORE</button>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default HomeCarousel;