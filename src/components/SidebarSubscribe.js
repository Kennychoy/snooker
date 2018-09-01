import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import "./SidebarSubscribe.css";

class SidebarSubscribe extends Component {
	render(){
		return (
			<div className="sidebarSubscribe  col-lg-12 col-md-6 col-12">
				<PageTitle title="JOIN OUR NEWSLETTER" />
				<div className="sidebarSubscribe-wrapper">
					<input type="text" placeholder="ENTER YOUR EMAIL"/>
					<button className="text-center">SUBSCRIBE</button>
				</div>
			</div>
		);
	}
}

export default SidebarSubscribe;