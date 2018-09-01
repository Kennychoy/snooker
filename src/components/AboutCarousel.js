import React, { Component } from 'react';
import "./AboutCarousel.css";

class AboutCarousel extends Component {

	render() {
		return (
			<div id="about-carousel" className="col-lg-12 col-md-12 col-12 carousel slide" data-ride="carousel">
				<div className="about-carousel-inner">
					<ul className="carousel-indicators">
						<li data-target="#about-carousel" datat-slide-to="0" className="active"></li>
						<li data-target="#about-carousel" datat-slide-to="0"></li>
						<li data-target="#about-carousel" datat-slide-to="0"></li>
					</ul>
					
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="img-wrapper"><img src="./img/trophy 4.png" alt="" className="img-responsive"/></div>
							<div className="carousel-caption">
								<div className="award-name"><span className="first">Somewhere</span> Championships</div>
								<div className="award-time">2016</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="img-wrapper"><img src="./img/trophy 5.png" alt="" className="img-responsive"/></div>
							<div className="carousel-caption">
								<div className="award-name"><span className="first">Best</span> Player Award</div>
								<div className="award-time">2017</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="img-wrapper"><img src="./img/trophy 6.png" alt="" className="img-responsive"/></div>
							<div className="carousel-caption">
								<div className="award-name"><span className="first">Next</span> St. Master</div>
								<div className="award-time">2018</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutCarousel;