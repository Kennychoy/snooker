import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./HotNews.css";

class HotNews extends Component {
	constructor(props){
		super(props);
		this.state = {
			hotnews: [
				{
					time: "4 HOURS AGO",
					title: "Nam imperdiet urna a ligula placerat porta."
				},
				{
					time: "16 HOURS AGO",
					title: "Aliquam rhoncus mi nec tristique luctus."
				},
				{
					time: "1 DAY AGO",
					title: "eu rhoncus nunc turpis at ex."
				},
				{
					time: "2 DAYS AGO",
					title: "Maecenas eu interdum diam."
				}
			]
		}
	}
	render (){
		return (
			<div className="hotnews col-12">
				<div className="homepage-titles hot-news-title">								
					<h5><i className="fas fa-fire"></i>HOT NEWS</h5>								
				</div>
				<div className="hot-news-wrapper">
					{this.state.hotnews.map( (item, i) => {
						return (
							<article key={i}>
								<div className="hot-hours">{item.time}</div>
								<div className="hot-headlines">
									<Link to="#">{item.title}</Link>
								</div>
							</article>
						);
					})}
				</div>
			</div>	
		);
	}
}

export default HotNews;