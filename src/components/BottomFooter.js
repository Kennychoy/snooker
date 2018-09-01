import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BottomFooter extends Component {
	render(){
		return (
			<div className="bottom-footer py-3">
				<div className="container">
					<div className="row">
						<nav className="footer-nav navbar navbar-inverse">
							<ul className="nav navbar-nav">
								<li><Link to="/">HOME</Link></li>
								<li><Link to="/about-us">ABOUT US</Link></li>
								<li><Link to="/news">NEWS</Link></li>
								<li><Link to="/shop/grid-shop">SHOPS</Link></li>
								<li><Link to="/contact">CONTACT US</Link></li>
							</ul>
						</nav>
						<div className="footer-copyright">
							SNOOKER &copy; {new Date().getFullYear()} <Link to="#">PRIVACY POLICY</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BottomFooter;