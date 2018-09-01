import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PagePortal from "./PagePortal";
import "./ProductSingle.css";
import Slider from "react-slick";

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class ProductSingle extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			content: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/product-single-carousel 1.jpg",
					name: "Parris 2 Pieces",
					current: "$200",
					original: "$250",
					desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet quam massa. In vel ligula sit amet massa volutpat vulputate. Ut aliquet faucibus purus.",
					rating: "80%"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/product-single-carousel 2.jpg",
					name: "Stamford 3 Pieces",
					current: "$250",
					original: "$280",
					desc: "Fusce rhoncus blandit lorem, quis ultricies dolor eleifend et. Nullam dictum gravida neque a aliquam. Fusce in nisi luctus, tempus erat vitae, maximus odio.",
					rating: "85%"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/product-single-carousel 3.jpg",
					name: "Glover 1 Piece",
					current: "$220",
					original: "$280",
					desc: "Fusce nibh est, accumsan eget arcu quis, rutrum bibendum quam. Fusce in tincidunt odio, sed cursus justo. Aliquam non interdum nibh.",
					rating: "90%"
				}
			],
			activeTab: "1",
			reviews: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/commentor 1.jpeg",
					name: "Mercy Andrade",
					time: "2 days ago",
					rating: "70%",
					text: "Nam id suscipit augue, tempus feugiat sem. Sed finibus venenatis aliquam. Vestibulum eleifend lorem dignissim massa aliquet cursus. Phasellus luctus, urna in tincidunt eleifend, urna tortor ullamcorper ligula, luctus accumsan urna ante eu nunc. Fusce fermentum mauris ultricies, suscipit lacus eu, tristique eros."
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/commentor 2.jpeg",
					name: "Liana Smyth",
					time: "3 days ago",
					rating: "90%",
					text: "Donec vitae tristique est. Curabitur semper metus pharetra arcu aliquet facilisis. Etiam finibus nec justo ac tempus. In non nisl eu risus pretium scelerisque id in urna. Integer eget metus vitae mauris bibendum imperdiet. Donec commodo efficitur mauris, eu fermentum odio blandit venenatis."
				},
			]
		}
	}
	toggle(tab){
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render(){
		var settings = {			
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false
		}
		return (
			<div className="product-single">
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				<div className="container">
					<div className="product-carousel">
						<Slider {...settings}>
							{this.state.content.map( (item, i) => {
								return (
									<div className="carousel-item" key={i}>
										<div className="item-wrapper">
											<div className="carousel-img">
												<img src={item.img} alt="" />
											</div>
											<div className="product-desc">
											
												<div className="product-content">
													<h1>{item.name}</h1>
													<div className="priceAndRatings">
														<div className="carousel-price">
															<div className="carousel-current">{item.current}</div>
															<div className="carousel-original">{item.original}</div>
														</div>
														<div className="carousel-rating">
															<div className="carousel-rating-inner" data-rating={item.rating}></div>
														</div>
													</div>
													<div className="carousel-text">
														{item.desc}
													</div>
												</div>
											
												<div className="product-filter">
													<div className="carousel-oz">
														<div className="carousel-label">Oz</div>
														<div className="select-oz">
															<div className="oz-single">14</div>
															<div className="oz-single">16</div>
															<div className="oz-single">18</div>
															<div className="oz-single">20</div>
															<div className="oz-single">22</div>
														</div>
													</div>
													<div className="carousel-piece">
														<div className="carousel-label">Piece(s)</div>
														<div className="select-piece">
															<div className="piece-single">3</div>
															<div className="piece-single">2</div>
															<div className="piece-single">1</div>
														</div>
													</div>
													<div className="carousel-quanity">
														<div className="carousel-label">Quanity</div>
														<div className="quanity-ctrl">
															<button className="quanity-add" onClick={this.quanityAdd}>+</button>
															<input type="text" placeholder="0"/>
															<button className="quanity-minus" onClick={this.quanityMinus}>-</button>
														</div>
													</div>
													<div className="carousel-btns">
														<button>
															<i className="fas fa-shopping-cart"></i>
															ADD TO CART
														</button>
														<div className="carousel-share">
															<button className="expand-share">
																<i className="fas fa-share-alt"></i>				
															</button>
															<ul>
																<li>SHARE</li>
																<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
																<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
																<li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
																<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
															</ul>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
					
					<div className="product-content">
						<Nav tabs>
						
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
									<span>SHIPPING & DELIVERY</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
									<span>CUSTOMER REVIEWS</span>
								</NavLink>
							</NavItem>
						</Nav>	
							
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<Row>
									<Col xs="12">
										Proin malesuada nec velit sed vulputate. Donec eleifend pulvinar augue. Nullam viverra lectus ac lacus ullamcorper sagittis non in massa. Pellentesque condimentum, sapien et luctus sodales, enim lorem sollicitudin metus, ac congue lectus elit vitae libero.
									</Col>										
								</Row>
							</TabPane>
							<TabPane tabId="2">
								<Row>
									{this.state.reviews.map((item, i) => {
										return (
											<Col xs="12">
												<div className="reviews">
													<div className="reviews-single">
														<div className="reviews-img">
															<img src={item.img} alt="" />
														</div>
														<div className="reviews-text">
															<div className="reviews-subtle">
																<div className="reviewer-time">
																	<div className="reviewer-name">{item.name}</div>
																	<div className="reviews-time">{item.time}</div>
																</div>
																<div className="reviews-rating">
																	<div className="reviews-rating-inner" data-rating={item.rating}></div>
																</div>
															</div>

															<div className="reviews-content">
																{item.text}
															</div>
														</div>
													</div>
												</div>
											</Col>
										);
									})}
								</Row>
							</TabPane>
						</TabContent>
							
						
					</div>
					
				{/* .container */}
				</div>
			{/* .product-single*/}
			</div>
		);
	}
	quanityAdd = () => {

	}
	quanityMinus = () => {
		let val = Number(document.querySelector(".quanity-ctrl input").getAttribute("value"));
		if(val === 0){return false};
		document.querySelector(".quanity-ctrl input").setAttribute("value", val-1)
	}
	componentDidMount(){			
		document.querySelectorAll(".oz-single").forEach( oz => {
			oz.addEventListener("click", () => {
				oz.classList.toggle("active");
			});
		});
		
		document.querySelectorAll(".piece-single").forEach( num => {
			num.addEventListener("click", () => {
				num.classList.toggle("active");
			});
		});
		
		document.querySelectorAll(".carousel-rating-inner").forEach( div => {
			let rating = div.getAttribute("data-rating");
			div.style.width = rating;
		})
		document.querySelectorAll(".quanity-add").forEach( btn => {
			btn.addEventListener("click", () => {
				let val = Number(btn.parentElement.querySelector("input").getAttribute("value"));
				btn.parentElement.querySelector("input").setAttribute("value", val + 1);
			});
		});
		document.querySelectorAll(".quanity-minus").forEach( btn => {			
			btn.addEventListener("click", () => {
				let val = Number(btn.parentElement.querySelector("input").getAttribute("value"));
				if(val === 0){ return false};
				btn.parentElement.querySelector("input").setAttribute("value", val - 1);
			});
		});
		
		document.querySelectorAll(".reviews-rating-inner").forEach( rating => {			
			rating.style.width = rating.getAttribute("data-rating");
		});
	}
}

export default ProductSingle;