import React, { Component } from 'react';
import {Link} from "react-router-dom";

const SpotlightNewsFooter = (props) => {
	return (
		<div className="spotlight-news-footer">
								
			<div className="spotlight-news-comments">
				<i className="far fa-comment-alt"></i>
				<span className="spotlight-news-comments-num">{props.commentsNum} COMMENTS</span>												
			</div>
												
			<div className="spotlight-news-shares">
				<span>SHARE</span>
				<ul>
					<li><Link to="#"><i className="fas fa-share-alt"></i></Link></li>
					<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
					<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
					<li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
					<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
				</ul>
			</div>
												
		</div>
	);
}

export default SpotlightNewsFooter;