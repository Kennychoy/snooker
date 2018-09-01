import React, { Component } from 'react';
import {Link} from "react-router-dom";

import ContactIcons from "./ContactIcons.js";

class MiddleFooter extends Component {
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
			<div className="middle-footer">
				<div className="container">
					<div className="row">
					
						<div className="col-lg-4 col-12 footer-md-left">
							<div className="md-left-top">
								<div className="md-left-logo">
									<img src="./img/logo.png" alt="" />
								</div>
								<div className="md-left-desc">Nunc a dignissim lacus. In hac habitasse platea dictumst. Pellentesque vitae urna quis.</div>
							</div>
							<div className="md-left-bottom">
								<button>GET IN TOUCH</button>
								<ul>
									<li><Link to="#"><i className="fab fa-fw fa-facebook-f"></i></Link></li>
									<li><Link to="#"><i className="fab fa-fw fa-twitter"></i></Link></li>
									<li><Link to="#"><i className="fab fa-fw fa-google-plus-g"></i></Link></li>
									<li><Link to="#"><i className="fab fa-fw fa-instagram"></i></Link></li>
								</ul>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-12 footer-md-md">
							<div className="md-footer-title">LATEST NEWS</div>
							<div className="footer-news">
								<div className="footer-news-headline">
									<Link to="#">In hac habitasse platea dictumst. Vestibulum non orci nec augue pretium ullamcorper.</Link>
								</div>
								<div className="footer-news-time">
									<i className="far fa-clock"></i>
									<time>1 Aug, 2018</time>
								</div>
							</div>
							<div className="footer-news">
								<div className="footer-news-headline">								
									<Link to="#">Aliquam pretium dictum dictum. Donec facilisis nibh id ex efficitur.</Link>
								</div>
								<div className="footer-news-time">
									<i className="far fa-clock"></i>
									<time>23 Jul, 2018</time>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-12 footer-md-right">
							<div className="md-footer-title">CONTACT US</div>
							{this.state.contacticons.map( (item, i) => {
								return (
									<ContactIcons icon={item.icon} desc={item.desc} email={item.email} key={i}/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MiddleFooter;