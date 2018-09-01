import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import ContactIcons from "./ContactIcons.js"
import "./Header.css";

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			contacticons: [
				{
					icon: "fas fa-users",
					desc: "JOIN US",
					email: "demo@snooker.com"
				},
				{
					icon: "far fa-envelope",
					desc: "CONTACT US",
					email: "email@snooker.com"
				}
			]
		}
	}
	render(){
		return (
			<div className="nav-wrapper">
			
				<div className="top-nav">
				
					<button className="d-xl-none hamburger-btn" onClick={this.hamburger}>
						<span className="hamburger-bar-one"></span>
						<span className="hamburger-bar-two"></span>
						<span className="hamburger-bar-three"></span>
					</button>
					
					<div className="container">
					
						<nav className="top-nav-left navbar">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/about-us" className="nav-link">About Us</Link>
								</li>
								<li className="nav-item">
									<Link to="/news" className="nav-link">News</Link>
								</li>
								<li className="nav-item">
									<Link to="/shop" className="nav-link">Shop</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact" className="nav-link">Contact Us</Link>
								</li>
								<li className="nav-item">
									<Link to="#" className="nav-link">Watch Live</Link>
								</li>
							</ul>
						</nav>
						
						<div className="top-nav-right">
							<ul className="top-right-outer-ul d-flex">
								<li className="select-lang" onMouseEnter={this.unfoldLang} onMouseLeave={this.foldLang}>
									<i className="fas fa-caret-down"></i>
									<ul className="top-right-inner-ul">
										<li className="show-lang">EN</li>
										<li>EN</li>
										<li>DE</li>
										<li>FR</li>
									</ul>									
								</li>								
								<li>
									<i className="fas fa-shopping-cart"></i>
									<span className="items-in-cart">2</span>
								</li>
								<li className="ur-ac">
									<i className="fas fa-sign-out-alt"></i>
									<Link to="#">YOUR ACCOUNT</Link>
								</li>
							</ul>
						</div>
						
					{/* .container */}
					</div>
				{/* .top-nav */}
				</div>
				
				<div className="main-nav bg-dark">
				
					<div className="main-nav-top">
						<div className="container">
						
							<div className="logo">
								<Link to="/"><img src="http://kennytesting.000webhostapp.com/snooker/img/logo.png" alt="" /></Link>
							</div>
							
							<div className="main-top-subtle d-flex">
							
								{this.state.contacticons.map( (item, i) => {
									return (
										<ContactIcons icon={item.icon} desc={item.desc} email={item.email} key={i}/>
									);
								})}
								
								<div className="main-top-search input-group">
									<input type="text" placeholder="Enter keywords..."/>
									<div className="input-group-append">
										<button type="submit" className="btn" formAction="#">
											<i className="fas fa-search"></i>
										</button>
									</div>									
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="main-nav-bottom">
						<div className="container">
						
							<nav className="navbar navbar-expand-lg">
								<ul className="navbar-nav">
									<li><NavLink to="/" exact>HOME</NavLink></li>
									<li><NavLink to="/about-us">ABOUT US</NavLink></li>
									<li className="has-dropdown">
										<NavLink to="/news">NEWS<i className="fas fa-caret-down"></i></NavLink>
										<ul className="dropdown-ul">
											<li>
												<div className="li-item-wrapper">
													<i className="fas fa-angle-right"></i>
													<Link to="/news/blog-post">BLOG POST</Link>
												</div>
											</li>
										</ul>
									</li>
									<li className="has-dropdown">
										<NavLink to="/shop">SHOP<i className="fas fa-caret-down"></i></NavLink>
										<ul className="dropdown-ul">
											<li>
												<div className="li-item-wrapper">
													<i className="fas fa-angle-right"></i>
													<Link to="/shop/product-page">PRODUCT PAGE</Link>
												</div>
											</li>
											<li>
												<div className="li-item-wrapper">
													<i className="fas fa-angle-right"></i>
													<Link to="/shop/shopping-cart">SHOPPING CART</Link>
												</div>
											</li>
											<li>
												<div className="li-item-wrapper">
													<i className="fas fa-angle-right"></i>
													<Link to="/shop/checkout">CHECKOUT</Link>
												</div>
											</li>
										</ul>
									</li>
									<li><NavLink to="/contact">CONTACT US</NavLink></li>
								</ul>
							</nav>
							
							<nav className="social-nav">
								<ul className="nav">
									<li className="nav-item">
										<Link to="#" className="nav-link">
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="#" className="nav-link">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="#" className="nav-link">
											<i className="fab fa-google-plus-g"></i>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="#" className="nav-link">
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
								</ul>
							</nav>
						
						</div>
					</div>
					
				{/* .main-nav */}
				</div>
				
			{/* .nav-wrapper*/}	
			</div>
		);
	}
	hamburger = () => {
		document.querySelector(".hamburger-btn").classList.toggle("hamburger");
		document.querySelector(".main-nav").classList.toggle("show-main-nav");
	}
	unfoldLang = () => {
		document.querySelector(".select-lang").addEventListener("mouseenter", () => {
			document.querySelector(".select-lang").style.overflowY = "visible";
			document.querySelector(".select-lang .fa-caret-down").style.transform = "rotate(180deg)"
			document.querySelectorAll(".top-right-inner-ul li").forEach( li => {
				li.addEventListener("mouseenter", () => {
					document.querySelector(".top-right-inner-ul li").innerHTML = li.innerHTML;
				});
			})
		});
	}
	
	foldLang = () => {
		document.querySelector(".select-lang").addEventListener("mouseleave", () => {
			document.querySelector(".select-lang").style.overflowY = "hidden";
			document.querySelector(".select-lang .fa-caret-down").style.transform = "rotate(0deg)"
		});
	}
	
	componentDidMount(){	
	
		window.addEventListener("scroll", () => {
			if(window.innerWidth >= 1200){
				if(window.scrollY > 170){
					document.querySelector(".main-nav-bottom").classList.add("stickTop");
				} else {
					document.querySelector(".main-nav-bottom").classList.remove("stickTop");
				}
			}
		});
		
		document.querySelectorAll(".has-dropdown").forEach( dropdown => {
			dropdown.addEventListener("click", () => {
				if(window.innerWidth < 1200){
					if(document.querySelector(".showDropdown")){
						if(dropdown.querySelector(".showDropdown")){
							dropdown.querySelector("ul").classList.toggle("showDropdown");							
						} else {
							document.querySelectorAll(".dropdown-ul").forEach( ul => {
								ul.classList.remove("showDropdown");
							});
							dropdown.querySelector("ul").classList.add("showDropdown");
							{/* change another caret*/}
							document.querySelectorAll(".has-dropdown").forEach( li => {
								li.querySelector(".fa-caret-down").classList.remove("rotate-caret-down");
							})
						}
					} else {
						dropdown.querySelector("ul").classList.toggle("showDropdown");
					}
					dropdown.querySelector(".fa-caret-down").classList.toggle("rotate-caret-down");
				}
			});
		});
	}
}

export default Header;