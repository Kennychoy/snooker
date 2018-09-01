import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "./PageTitle.css";

class PageTitle extends Component {
	render(){
		return (
			<div className="homepage-titles hot-news-title page-title">								
				<h5><i className={this.props.classes}></i>{this.props.title}</h5>
				{this.props.badgetextone ? <Link to="#" className="badge badege-secondary">{this.props.badgetextone}</Link> : void(0)}
				{this.props.badgetexttwo ? <Link to="#" className="badge badege-secondary">{this.props.badgetexttwo}</Link> : void(0)}
			</div>
		);
	}
}

export default PageTitle;