import React, { Component } from 'react';
import $ from 'jquery'
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "./HomeBottomCarousel.css";

class HomeBottomCarousel extends Component {
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
			],
			imgscale: 1
		}
	}

	render() {
		var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
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
				breakpoint: 568,
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
			<div className="homeBottomCarousel bg-light">
			
				<div className="fullscreen-layer">
					<div className="layer-ul">
						<ul className="fullscreen-outer-ul">
							<li>
								<Link to="#" onClick={this.toggleUL}><i className="fas fa-share-alt fa-fw"></i></Link>
								<ul className="fullscreen-inner-ul toggleUL">
									<li>
										<Link to="#">
											<span className="inner-social-icon">
												<i className="fab fa-facebook-f fa-fw"></i>
											</span>
											<span className="inner-social-name">Facebook</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<span className="inner-social-icon">
												<i className="fab fa-twitter fa-fw"></i>
											</span>
											<span className="inner-social-name">Twitter</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<span className="inner-social-icon">
												<i className="fab fa-google-plus-g fa-fw"></i>
											</span>
											<span className="inner-social-name">GooglePlus</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<span className="inner-social-icon">
												<i className="fab fa-pinterest-p fa-fw"></i>
											</span>
											<span className="inner-social-name">Pinterest</span>
										</Link>
									</li>
								</ul>
							</li>
							<li><Link to="#" className={this.state.imgscale > 1 ? "" : "disabled"} onClick={this.originalSize}><i className="far fa-clone fa-fw"></i></Link></li>
							<li><Link to="#" className={this.state.imgscale > 1 ? "" : "disabled"} onClick={this.shrinkImg}><i className="fas fa-search-minus fa-fw"></i></Link></li>
							<li><Link to="#" onClick={this.enlargeImg}><i className="fas fa-search-plus fa-fw"></i></Link></li>
							<li><Link to="#" download><i className="fas fa-download fa-fw"></i></Link></li>
							<li><Link to="#" onClick={this.closeLayer}><i className="fas fa-times fa-fw"></i></Link></li>
						</ul>
					</div>
					<div className="layer-img"><img src="" alt="" /></div>
				</div>
							
				<div className="container-fluid">
					<Slider {...settings}>
						
						{this.state.content.map( (item, i) => {
							return (
								<div className="bottom-carousel-item" key={i} onClick={this.handleOnClick}>
									<Link to="#">
										<img src={item.img} alt="" className="img-responsive" />
										<span><i className="fas fa-search"></i></span>
									</Link>
								</div>
							);
						})}

					</Slider>
				</div>
				
			</div>
		);
	}
	toggleUL = () => {
		document.querySelector(".fullscreen-inner-ul").classList.toggle("toggleUL");
	}
	handleOnClick = (e) => {
		let div = e.target.closest(".bottom-carousel-item");
		let imgPath = div.querySelector("img").getAttribute("src");
		document.querySelector(".fullscreen-layer img").setAttribute('src', imgPath);
		document.querySelector(".fullscreen-layer").style.zIndex = 17;		
				
		let dogPic = "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=animal-chihuahua-cute-39317.jpg&fm=jpg";
		document.querySelector(".fullscreen-outer-ul .fa-download").parentElement.setAttribute("href", dogPic);		
	}
	enlargeImg = () => {
		this.setState({imgscale: this.state.imgscale + 0.1}, () => {
			document.querySelector(".layer-img img").style.transform = `scale(${this.state.imgscale})`;
		});
	}
	shrinkImg = () => {
		if(this.state.imgscale > 1){
			this.setState({imgscale: this.state.imgscale - 0.1}, () => {
				document.querySelector(".layer-img img").style.transform = `scale(${this.state.imgscale})`;
			});
		} else {
			return false;
		}
	}
	originalSize = () => {
		if(this.state.imgscale > 1){
			this.setState({imgscale: 1}, () => {
				document.querySelector(".layer-img img").style.transform = `scale(${this.state.imgscale})`;
			});
		} else {
			return false;
		}
	}
	closeLayer = () => {
		document.querySelector(".fullscreen-layer").style.zIndex = -1;
		document.querySelector(".fullscreen-inner-ul").classList.add("toggleUL");
	}
}

export default HomeBottomCarousel;