import React, { Component } from 'react';
import PagePortal from "./PagePortal";
import "./GridShop.css";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import GridshopSidebar from "./GridshopSidebar";
import CustomPagination from "./CustomPagination";

class GridShop extends Component {
	constructor(props){
		super(props);		
		this.state = {
			products: this.productsArr
		}
	}
	productsArr = [
					{
						badge_class: "badge badge-danger",
						badge_text: "HOT",
						badge_icon: "fab fa-gripfire",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 1.jpg",
						name: "4\" Tip Sander",
						original_price: "$15",
						current_price: "$12",
						rating: "70%",
						desc: "Nulla vel tortor at nisl rutrum interdum. Cras non posuere justo. Donec sit amet egestas ex. Curabitur vel augue sit."
					},
					{
						badge_class: "badge badge-primary",
						badge_text: "NEW",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 2.jpg",
						name: "Peradon Ball Marker",
						original_price: "",
						current_price: "$18",
						rating: "75%",
						desc: "In at tortor augue. Vivamus tincidunt fringilla pulvinar. Donec feugiat tempor nisl."
					},
					{
						badge_class: "",
						badge_text: "",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 3.jpg",
						name: "Pioneer Cue Chalk",
						original_price: "",
						current_price: "$25",
						rating: "80%",
						desc: "In dui lectus, semper iaculis sem eu, pellentesque pellentesque massa. In vestibulum suscipit venenatis."
					},
					{
						badge_class: "",
						badge_text: "",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 4.jpg",
						name: "Plastic Magnetic Chalk Holder",
						original_price: "",
						current_price: "$26",
						rating: "85%",
						desc: "Aculis eget, imperdiet quis mi. Nulla laoreet sodales rhoncus.semper iaculis sem eu, pellentesque pellentesque massa."
					},
					{
						badge_class: "badge badge-danger",
						badge_text: "ON SALE",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 5.jpg",
						name: "Nylon Cross Rest Head",
						original_price: "$27",
						current_price: "$24",
						rating: "90%",
						desc: "Lectus non aliquet. Pellentesque blandit augue in eros venenatis mollis convallis ac dui. Vestibulum et leo est."
					},
					{
						badge_class: "",
						badge_text: "",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 6.jpg",
						name: "Bison Super Glue Gel",
						original_price: "",
						current_price: "$30",
						rating: "95%",
						desc: "Vestibulum ipsum, vitae tincidunt tellus. Etiam fringilla mollis dapibus."
					},
					{
						badge_class: "badge badge-danger",
						badge_text: "HOT",
						badge_icon: "fab fa-gripfire",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 7.jpg",
						name: "Cue Craft Cue Towel",
						original_price: "$31",
						current_price: "$25",
						rating: "80%",
						desc: "VClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
					},
					{
						badge_class: "",
						badge_text: "",
						badge_icon: "",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 8.jpg",
						name: "Nylon Bristle Pool Table Brush",
						original_price: "",
						current_price: "$40",
						rating: "85%",
						desc: "Ac porttitor lacus tortor rutrum dui. Ut ac nulla at risus pulvinar dignissim."
					},
					{
						badge_class: "badge badge-primary",
						badge_text: "NEW",
						badge_icon: "fab fa-angellist",
						img: "http://kennytesting.000webhostapp.com/snooker/img/product 9.jpg",
						name: "Plastic Triangle - 15 Balls",
						original_price: "$20",
						current_price: "$15",
						rating: "90%",
						desc: "Sed ultricies, turpis vel mollis faucibus, arcu est blandit odio, in placerat tortor odio laoreet ex."
					}
				];
	render(){
		return (
			<div className="gridshop">
				
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				
				<div className="gridshop-inner">
					<Container>
						<div className="row">
							<div className="gridshop-products col-xl-9 col-12">
							
								<div className="gridshop-header">
									<div className="page-title">
										<h5>PRODUCT CATALOG</h5>
									</div>
									<div className="gridshop-header-btns">
										<div className="btn-uls">
										
											<div className="ul-wrapper">
												<div className="ul-head">NEWEST FIRST</div>
												<ul>
													<li>NEWEST FIRST</li>
													<li>OLDEST FIRST</li>
												</ul>
											</div>
											
											<div className="ul-wrapper">
												<div className="ul-head">PRODUCT PRICE</div>
												<ul>
													<li>LOW TO HIGH</li>
													<li>HIGH TO LOW</li>
												</ul>
											</div>
											
										<div className="ul-wrapper">
												<div className="ul-head">SHOW 6 PER PAGE</div>
												<ul>
													<li>SHOW 6 PER PAGE</li>
													<li>SHOW 12 PER PAGE</li>
													<li>SHOW 18 PER PAGE</li>
												</ul>
											</div>
											
										</div>
										<div className="grid-stacks">
											<i className="fas fa-th active" onClick={this.toggleDisplay}></i>
											<i className="fas fa-list-ul" onClick={this.toggleDisplay}></i>
										</div>
									</div>
								{/* gridshop-header */}	
								</div>
								
								<div className="grid-product-section">
										{this.state.products.map( (item, i) => {
											return (
												<div className="product-outer" key={i}>
													<div className="product-inner">
														<div className="product-img">
															<div className="product-badge">
																<span className={item.badge_class}>
																	{item.badge_text}<i className={item.badge_icon}></i>
																</span>
															</div>
															<img src={item.img} alt="" />

															<ul className="product-outer-ul">
																<li><i className="fas fa-search-plus"></i></li>
																<li><i className="fas fa-shopping-cart"></i></li>
																<li className="product-outer-share"><i className="fas fa-share-alt"></i></li>
																<ul className="product-inner-ul" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
																	<li>SHARE</li>
																	<li className="product-inner-ul-icons"><i className="fab fa-facebook-f"></i></li>
																	<li className="product-inner-ul-icons"><i className="fab fa-twitter"></i></li>
																	<li className="product-inner-ul-icons"><i className="fab fa-google-plus-g"></i></li>
																	<li className="product-inner-ul-icons"><i className="fab fa-instagram"></i></li>
																</ul>
															</ul>
														</div>
														<div className="product-details">
															<div className="product-name">{item.name}</div>
															<div className="product-price">
																<div className="original-price">{item.original_price}</div>
																<div className="current-price">{item.current_price}</div>
															</div>
															<div className="product-ratings">
																<div className="product-ratings-inner" data-rating={item.rating} ></div>
															</div>
															<div className="product-desc">
																{item.desc}
															</div>
															
															<div className="product-btns">
																<div className="product-addToCart">
																	<button>ADD TO CART</button>
																</div>
																<div className="product-share-wrapper">
																	<div className="stack-share">
																			<i className="fas fa-share-alt"></i>																	
																	</div>
																	<div className="product-expand-share">
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
								{/* .grid-product-section */}
								</div>
								
								<CustomPagination />
								
							{/* . gridshop-products*/}
							</div>
							
							<GridshopSidebar />
							
						{/* .row */}
						</div>
					{/* .container */}
					</Container>
				{ /* .grid-shop-inner */ }
				</div>
			{/* .grid-shop */}
			</div>
		);
	}
	toggleDisplay = (e) => {
		if(!e.target.classList.contains("active")){
			e.target.classList.add("active");
			let el = e.target.nextElementSibling || e.target.previousElementSibling;
			el.classList.remove("active");
			document.querySelector(".grid-product-section").classList.toggle("displayStack");
			
			if(document.querySelector(".grid-product-section").classList.contains("displayStack")){
				this.setState({products: this.productsArr.slice(0, 6)});
			} else {
				this.setState({products: this.productsArr});
			}
			
		} else {
			return false;
		}
	}
	handleMouseEnter = (e) => {
		let outerUL = e.target.closest(".product-inner-ul");
		outerUL.style.height = "100%";
	}
	handleMouseLeave = (e) => {
		let outerUL = e.target.closest(".product-inner-ul");
		outerUL.style.height = "0";
	}
	componentDidMount(){
		document.querySelectorAll(".ul-wrapper").forEach( wrapper => {
			wrapper.addEventListener("click", () => {
				wrapper.classList.toggle("expand-ul");
			});
		});
		
		document.querySelectorAll(".ul-wrapper li").forEach(li => {
			li.addEventListener("click", (e) => {
				li.parentElement.previousSibling.innerHTML = e.target.innerHTML;
				
			});
		});
		
		document.querySelectorAll(".product-ratings-inner").forEach( rating => {			
			rating.style.width = rating.getAttribute("data-rating");
		});
		
		document.querySelectorAll(".product-inner").forEach( div => {
			div.querySelector(".product-outer-share").addEventListener("mouseenter", () => {
				div.querySelector(".product-inner-ul").style.height = "100%";
			});
		});
		
		document.querySelectorAll(".product-share-wrapper").forEach(wrapper => {
			wrapper.addEventListener("mouseenter", () => {
				wrapper.querySelector(".stack-share").style.width = 0;
				setTimeout(() => {
					wrapper.querySelector(".product-expand-share").style.width = "100%";
				} ,300);				
			})
		});
		
		document.querySelectorAll(".product-share-wrapper").forEach(wrapper => {
			wrapper.addEventListener("mouseleave", () => {				
				wrapper.querySelector(".product-expand-share").style.width = 0;
				setTimeout(() => {
					wrapper.querySelector(".stack-share").style.width = "100%";
				} ,300);				
			})
		});
		
		document.querySelectorAll(".product-price").forEach( price => {
			if(price.querySelector(".original-price").innerHTML == ""){
				price.querySelector(".current-price").style.margin = "0";				
			} else {
				price.querySelector(".current-price").style.color = "#3f90dc";
				price.querySelector(".current-price").style.transform = "scale(1.5)";
			}
		});
	}
}

export default GridShop;