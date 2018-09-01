import React, { Component } from 'react';
import {Link} from "react-router-dom";

class HomeShopCarousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			shopcontent: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/homeshopcarousel 1.jpg",
					badge: "New",
					name: "PARRIS MAPLE CUE",
					price: "250",
					rating: "4.7"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/homeshopcarousel 2.jpg",
					badge: "Hot",
					name: "STAMFORD 1 PIECE",
					price: "280",
					rating: "5"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/homeshopcarousel 3.jpg",
					badge: "On Sale",
					name: "O'MIN LUXURY SET",
					price: "300",
					rating: "4.1"
				}
			]
		}
	}
	render(){			
		return (
			<div className="home-shop-carousel col-lg-12 col-md-6 col-12">
			
				<div className="homepage-titles spotlight-news-title">
					<h5>SHOP</h5>
					<div className="shop-carousel-controls">
						<a className="carousel-control-prev" href="#home-shop-carousel" data-slide="prev">
							<span className="carousel-control-prev-icon">
								<i className="fas fa-angle-left"></i>
							</span>
						</a>
						<a className="carousel-control-next" href="#home-shop-carousel" data-slide="next">
							<span className="carousel-control-next-icon">
								<i className="fas fa-angle-right"></i>
							</span>
						</a>
					</div>
				</div>
				
				<div id="home-shop-carousel" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
					
						{this.state.shopcontent.map( (item, i) => {
							return (
								<div className="carousel-item" key={i} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
									<div className="card">
										<div className="home-shop-img">
											<img src={item.img} className="card-img-top" alt="" />
											
											{this.categorizeBadge(item.badge)}
											
											<div className="shop-btns">
											
												<div className="shop-expand-share shop-btns-single" onMouseEnter={this.unfoldHiddenUl}>
													<i className="fas fa-share-alt fa-fw"></i>
												</div>
												<div className="shop-cart shop-btns-single">
													<i className="fas fa-shopping-cart fa-fw"></i>
												</div>
												<div className="shop-check shop-btns-single">
													<i className="fas fa-search-plus fa-fw"></i>
												</div>
												
												<ul className="shop-hidden-ul" onMouseLeave={this.foldHiddenUl}>
													<li><Link to="#">SHARE</Link></li>
													<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
													<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
													<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
												</ul>
											</div>
											
										</div>
										<div className="card-body">
											<div className="product-name">{item.name}</div>
											<div className="product-price">${item.price}</div>
											<div className="product-rating">
												<div className="product-inner-rating" data-rating={item.rating}></div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					

						
					</div>
				</div>
				
			</div>
		);
	}
	handleMouseEnter = (e) => {
		let carouselItem = e.target.closest(".carousel-item");
		let shopBtns = carouselItem.querySelector(".shop-btns");
		shopBtns.style.opacity = 1;
		shopBtns.style.height = "auto";
		shopBtns.style.bottom = "15px";
	}
	handleMouseLeave = (e) => {
		let carouselItem = e.target.closest(".carousel-item");
		let shopBtns = carouselItem.querySelector(".shop-btns");
		shopBtns.style.opacity = 0;
		shopBtns.style.height = 0;
		shopBtns.style.bottom = "-50px";
	}
	unfoldHiddenUl = (e) => {
		let hiddenUl = e.target.closest(".shop-btns").querySelector(".shop-hidden-ul");
		hiddenUl.style.height = "95%";
		hiddenUl.style.zIndex = 2;
		hiddenUl.style.opacity = 1;
	}
	foldHiddenUl = (e) => {
		let hiddenUl = e.target.closest(".shop-hidden-ul");
		hiddenUl.style.height = 0;
		hiddenUl.style.zIndex = -1;
		hiddenUl.style.opacity = 0;
	}
	categorizeBadge = (txt) => {
		if(txt.toLowerCase() === "new"){
			return (<span className="badge badge-success">New</span>)
		}
		if(txt.toLowerCase() === "hot"){
			return (<span className="badge badge-danger">Hot</span>)
		}
		if(txt.toLowerCase() === "on sale"){
			return (<span className="badge badge-warning">On Sale</span>)
		}
	}
	ratings = (num) => {
		
	}
	componentDidMount(){
		
		document.querySelector("#home-shop-carousel .carousel-item").classList.add("active");

		document.querySelectorAll(".product-inner-rating").forEach(rating => {
			let ratePercentage = (((rating.getAttribute("data-rating") / 5 ) * 100 ) + "%");
			rating.style.width = ratePercentage;
		});
	}
}

export default HomeShopCarousel;