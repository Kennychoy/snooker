import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import "./SidebarTags.css";

class SidebarTags extends Component {
	constructor(props){
		super(props);
		this.state = {
			tags: [
				"tristique",
				"Mauris",
				"hendrerit",
				"ullamcorper",
				"tincidunt",
				"ullamcorper",
				"egestas",
				"facilisis",
				"laoreet",
				"aliquam",
				"viverra",
				"libero",
				"finibus",
				"Phasellus",
				"purus"
			]
		}
	}
	render(){
		return (
			<div className="sidebar-tags col-lg-12 col-md-6 col-12">
				<PageTitle title="TAGS" />
				<div className="tags-wrapper">
					{this.state.tags.map( (item, i) => {
						return (
							<button key={i}>{item}</button>
						);
					})}
				</div>
			</div>
		);
	}
}

export default SidebarTags;