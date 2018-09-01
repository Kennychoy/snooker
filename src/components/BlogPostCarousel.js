import React, { Component } from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import PageTitle from "./PageTitle";
import "./BlogPostCarousel.css";

class BlogPostCarousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			content: [
				{					
					img: "http://kennytesting.000webhostapp.com/snooker/img/bottomcarousel 1.jpg"
				},
				{					
					img: "http://kennytesting.000webhostapp.com/snooker/img/bottomcarousel 2.jpg"
				},
				{					
					img: "http://kennytesting.000webhostapp.com/snooker/img/bottomcarousel 3.jpg"
				},
				{					
					img: "http://kennytesting.000webhostapp.com/snooker/img/bottomcarousel 4.jpg"
				},
				{					
					img: "http://kennytesting.000webhostapp.com/snooker/img/bottomcarousel 5.jpg"
				}
			]
		}
	}
	render(){
		var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoplay: true
				}
			}
		]
		};
		return (
			<div className="blogpost-carousel">
				<PageTitle title="RELATED NEWS"/>
				<div className="container">
					<Slider {...settings}>
						
						{this.state.content.map( (item, i) => {
							return (
								<div className="blogpost-carousel-item" key={i} >
									<Link to="#">
										<img src={item.img} alt="" className="img-responsive" />
									</Link>
								</div>
							);
						})}

					</Slider>
				</div>
			</div>
		);
	}
}

export default BlogPostCarousel;