import React, { Component } from 'react';

import PageTitle from "./PageTitle.js";
import "./AboutFollowUs.css";

class AboutFollowUs extends Component {
	constructor(props){
		super(props);
		this.state = {
			social: [
				{
					followers: "30K",
					like: true
				},
				{
					followers: "25K",
					like: false
				},
				{
					followers: "28K",
					like: false
				},
				{
					followers: "32K",
					like: true
				},
			]
		}
	}
	render(){
		return (
			<div className="about-follow-us col-12">
			
				<PageTitle title="FOLLOW US"/>
				
				<div className="about-follow-wrapper">
				
				{this.state.social.map((item, i) => {
					return (
						<div className="about-follow-divs" key={i}>
							<div className="about-follow-icon"></div>
							<div className="about-follow-text">
								<div className="about-follow-num">{item.followers}</div>
								<div className="about-follow-btn">
									<div className="about-follow-like">{item.like ? "Like" : "Follow"}</div>
									<div className="about-follow-plus">
										<i className="fas fa-plus"></i>
									</div>
								</div>
							</div>
						</div>
					);
				})}
					
				</div>
				
			</div>
		);
	}
}

export default AboutFollowUs;