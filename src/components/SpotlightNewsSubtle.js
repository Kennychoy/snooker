import React, { Component } from 'react';

const SpotlightNewsSubtle = (props) => {
	return (
		<div className="spotlight-news-subtle">
								
			<div className="spotlight-news-cat">
				{props.newsCatagory == "TOURANMENT" ? (<span className="badge badge-success">TOURANMENT</span>) : ((<span className="badge badge-danger">Q SCHOOL</span>))}
				
			</div>
			<div className="spotlight-news-date">
				<time>{props.newsDate}</time>
			</div>
			<div className="spotlight-news-views">
				<i className="far fa-eye"></i>
				<span className="spotlight-news-views-num">{props.newsViews}</span>
			</div>
			
		</div>
	);
}

export default SpotlightNewsSubtle;