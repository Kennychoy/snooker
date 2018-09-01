import React, { Component } from 'react';
import PagePortal from "./PagePortal";
import Sidebar from "./Sidebar";
import "./GridShop.css";

class GridShop extends Component {
	constructor(props){
		super(props);
		let productsArr = [
				{
					badge_class: "badge badge-danger",
					badge_text: "HOT",
					badge_icon: "fab fa-gripfire",
					img: "../img/product 1.jpg",
					name: "4\" Tip Sander",
					original_price: "$15",
					current_price: "$12",
					rating: "70%"
				},
				{
					badge_class: "badge badge-primary",
					badge_text: "NEW",
					badge_icon: "",
					img: "../img/product 2.jpg",
					name: "Peradon Ball Marker",
					original_price: "",
					current_price: "$18",
					rating: "75%"
				},
				{
					badge_class: "",
					badge_text: "",
					badge_icon: "",
					img: "../img/product 3.jpg",
					name: "Pioneer Cue Chalk",
					original_price: "",
					current_price: "$25",
					rating: "80%"
				},
				{
					badge_class: "",
					badge_text: "",
					badge_icon: "",
					img: "../img/product 4.jpg",
					name: "Plastic Magnetic Chalk Holder",
					original_price: "",
					current_price: "$26",
					rating: "85%"
				},
				{
					badge_class: "badge badge-danger",
					badge_text: "ON SALE",
					badge_icon: "",
					img: "../img/product 5.jpg",
					name: "Nylon Cross Rest Head",
					original_price: "$27",
					current_price: "$24",
					rating: "90%"
				},
				{
					badge_class: "",
					badge_text: "",
					badge_icon: "",
					img: "../img/product 6.jpg",
					name: "Bison Super Glue Gel",
					original_price: "",
					current_price: "$30",
					rating: "95%"
				},
				{
					badge_class: "badge badge-danger",
					badge_text: "HOT",
					badge_icon: "fab fa-gripfire",
					img: "../img/product 7.jpg",
					name: "Cue Craft Cue Towel",
					original_price: "$31",
					current_price: "$25",
					rating: "80%"
				},
				{
					badge_class: "",
					badge_text: "",
					badge_icon: "",
					img: "../img/product 8.jpg",
					name: "Nylon Bristle Pool Table Brush",
					original_price: "",
					current_price: "$40",
					rating: "85%"
				},
				{
					badge_class: "badge badge-primary",
					badge_text: "NEW",
					badge_icon: "fab fa-angellist",
					img: "../img/product 9.jpg",
					name: "Plastic Triangle - 15 Balls",
					original_price: "$20",
					current_price: "$15",
					rating: "90%"
				}
			];
		this.state = {
			products: productsArr
		}
	}
	render(){
		return (
			<div className="gridshop">
				
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				
				<div className="gridshop-inner">
					<div className="container">
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
											<i className="fas fa-th" onClick={this.displayGrid}></i>
											<i className="fas fa-list-ul" onClick={this.displayStack}></i>
										</div>
									</div>
								{/* gridshop-header */}	
								</div>
								
								<div className="grid-product-section">
									<div className="row">
										
										{this.state.products.map( (item, i) => {
											return (
												<div className="product-outer col-lg-4 col-sm-6 col-12" key={i}>
													<div className="product-inner">
														<div className="product-img">
															<div className="product-badge">
																<span className={item.badge_class}>
																	{item.badge_text}<i className={item.badge_icon}></i>
																</span>
															</div>
															<img src={item.img} alt="" />													
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
														</div>
													</div>
												</div>
											);
										})}
										
									</div>
								</div>
								
							</div>
							
							<div className="gridshop-sidebar col-xl-3 col-12">
								<Sidebar sidebarcontent={[1, 2, 3]} />
							</div>
							
						{/* .row */}
						</div>
					{/* .container */}
					</div>
				{ /* .grid-shop-inner */ }
				</div>
			{/* .grid-shop */}
			</div>
		);
	}
	displayGrid = () => {}
	displayStack = () => {}
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
	}
}

export default GridShop;