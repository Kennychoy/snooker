import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Header extends Component {
	render(){
		return (
			<nav className="navbar bg-dark nav-wrapper">			
				<div className="container">	
				<button className="d-xl-none">hello</button>
				
					<div id="top-nav" className="d-xl-flex d-lg-none">
					
						<nav className="navbar bg-dark navbar-dark top-left-nav">
							
							<ul className="nav">
								<li className="nav-item">
									<Link className="nav-link" to="#">About Us</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">News</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">Shop</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">Contact Us</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">Watch Live</Link>
								</li>
							</ul>
						</nav>
						
						<nav className="navbar bg-dark navbar-dark top-right-nav">
							<ul className="nav">
								<li className="nav-item select-lang">
									<div>										
										<ul id="outer-ul">
											<li>EN</li>
											<ul id="inner-ul">
												<li>EN</li>
												<li>FR</li>
												<li>DE</li>
											</ul>
										</ul>
										<i className="fas fa-caret-down"></i>
									</div>
								</li>
								<li className="nav-item">
									<Link to="#">
										<i className="fas fa-shopping-cart"></i>
										<span className="cart-items">2</span>
									</Link>									
								</li>
								<li className="nav-item ur-ac">
									<i className="fas fa-sign-out-alt"></i>
									<span>YOUR ACCOUNT</span>
								</li>
							</ul>
						</nav>
						
					{/* #top-nav*/}	
					</div>
					

					
				{/* container */}	
				</div>
				
					<div className="main-nav">
						<div className="container">
						
							<nav className="navbar middle-nav" id="middle-nav">
							
								<Link to="/" className="navbar-brand">
									<img src="./img/logo.png" alt="" />
								</Link>
								
								<ul className="navbar-nav">
									<li className="join-us">
										<i className="fas fa-users"></i>
										<div className="middle-nav-text-wrapper">
											<div className="nav-join-us middle-nav-text">BECOME 1 OF US</div>
											<div className="nav-email">joinus@snooker.com</div>
										</div>
									</li>
									<li className="contact-us">
										<i className="far fa-envelope"></i>
										<div className="middle-nav-text-wrapper">
											<div className="nav-contact-us middle-nav-text">CONTACT US</div>
											<div className="nav-email">info@snooker.com</div>
										</div>
									</li>
									<li>
										<input type="text" placeholder="Enter search keywords..."/>
										<button type="submit" formAction="#"><i className="fas fa-search"></i></button>
									</li>
								</ul>
							{/* #middle-nav*/}
							</nav>
							
							<nav className="navbar navbar-expand-xl" id="bottom-nav">
								<div className="bottom-left-nav">
									<ul className="navbar-nav">
										<li className="nav-item">
											<Link to="#" className="nav-link">HOME</Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link">ABOUT US</Link>
										</li>
										<li className="dropdown nav-item">
											<Link to="#" className="nav-link drogdown-toggle" data-toggle="dropdown">NEWS</Link>
											<i className="fas fa-caret-down"></i>
											<div className="dropdown-menu">
												<Link to="#" className="dropdown-item">DROPDOWN</Link>
											</div>
										</li>
										<li className="dropdown nav-item">
											<Link to="#" className="nav-link drogdown-toggle" data-toggle="dropdown">SHOP</Link>
											<i className="fas fa-caret-down"></i>
											<div className="dropdown-menu">
												<Link to="#" className="dropdown-item nav-link">DROPDOWN</Link>
												<Link to="#" className="dropdown-item nav-link">DROPDOWN</Link>
												<Link to="#" className="dropdown-item nav-link">DROPDOWN</Link>
												<Link to="#" className="dropdown-item nav-link">DROPDOWN</Link>
												<Link to="#" className="dropdown-item nav-link">DROPDOWN</Link>
											</div>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link">CONTACT US</Link>
										</li>
									</ul>
								</div>
								<div className="bottom-right-nav">
									<ul className="navbar-nav">
										<li className="nav-item">
											<Link to="#" className="nav-link"><i className="fab fa-facebook-f"></i></Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link"><i className="fab fa-twitter"></i></Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link"><i className="fab fa-google-plus-g"></i></Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link"><i className="fab fa-instagram"></i></Link>
										</li>
									</ul>
								</div>
							</nav>
							
						{/* .container */}
						</div>
						
					</div>
					
			{/* .nav-wrapper*/}	
			</nav>
		);
	}
	componentDidMount(){
		
		document.querySelector(".select-lang").addEventListener("mouseenter", () => {
			document.querySelector(".select-lang div").style.overflowY = "visible";
			document.querySelector(".select-lang i").style.transform = "rotate(180deg)";
		});
		
		document.querySelector(".select-lang").addEventListener("mouseleave", () => {
			document.querySelector(".select-lang div").style.overflowY = "hidden";
			document.querySelector(".select-lang i").style.transform = "rotate(0deg)";
		});
		
		document.querySelectorAll("#inner-ul li").forEach( li => li.addEventListener("mouseenter", () => {
			document.querySelector("#outer-ul li").innerHTML = li.innerHTML;
		}));
	}
}

export default Header;