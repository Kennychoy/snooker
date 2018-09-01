import React, { Component } from 'react';
import Slider from "react-slick";
import "./AwardsCarousel.css";
import PageTitle from "./PageTitle";

class AwardsCarousel extends Component {
	render(){
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false
		}
		return (
			<div className="awards-carousel col-12">
			
				<PageTitle title="PLAYER AWARDS" />
			
				<div className="container">
					<Slider {...settings}>
					
						<div className="awards-carousel-outer">
							<div className="awards-carousel-inner">
								<div className="awards-carousel-desc">
									<div className="awards-name"><span className="first">German</span> Master</div>
									<div className="awards-year">2018</div>
								</div>
								<div className="awards-carousel-pic">
									<img src="http://kennytesting.000webhostapp.com/snooker/img/trophy 4.png" alt="" />
								</div>
							</div>
						</div>
						
						<div className="awards-carousel-outer">
							<div className="awards-carousel-inner">
								<div className="awards-carousel-desc">
									<div className="awards-name"><span className="first">China</span> Open</div>
									<div className="awards-year">2017</div>
								</div>
								<div className="awards-carousel-pic">
									<img src="http://kennytesting.000webhostapp.com/snooker/img/trophy 5.png" alt="" />
								</div>
							</div>
						</div>
						
						<div className="awards-carousel-outer">
							<div className="awards-carousel-inner">
								<div className="awards-carousel-desc">
									<div className="awards-name"><span className="first">England</span> Classic</div>
									<div className="awards-year">2016</div>
								</div>
								<div className="awards-carousel-pic">
									<img src="http://kennytesting.000webhostapp.com/snooker/img/trophy 6.png" alt="" />
								</div>
							</div>
						</div>
						
					</Slider>
				</div>	
			</div>
		);
	}
}

export default AwardsCarousel;