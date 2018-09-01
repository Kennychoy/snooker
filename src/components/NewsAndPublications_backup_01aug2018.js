import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NewsAndPublications extends Component {
	render(){
		return (
			<div className="newsAndPublications">
			
				<div className="homepage-titles follow-us-title">								
					<h5>News And Publications</h5>								
				</div>
				
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<Link className="nav-link active" data-toggle="tab" to="#new-news">
							NEWS
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" data-toggle="tab" to="#trending-news">
							TRENDING
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" data-toggle="tab" to="#popular-news">
							POPULAR
						</Link>
					</li>
				</ul>
				
				<div className="tab-content">
				
					<div id="new-news" className="container tab-pane active">
						<div className="publication-inner">
							<div className="publication-img">
								<img src="./img/publication 1.jpg" alt="" />
							</div>
							<div className="publication-content">
								<div className="publication-content-title">
									<Link to="#">Maecenas tempor lorem sed sapien hendrerit rhoncus</Link>
								</div>
								<div className="publication-content-time">
									<i className="far fa-clock"></i>
									<time>JULY 31, 2018</time>
								</div>
							</div>
						</div>
					</div>
					
					<div id="trending-news" className="container tab-pane fade">
						<div className="publication-inner">
							<div className="publication-img">
								<img src="./img/publication 2.jpg" alt="" />
							</div>
							<div className="publication-content">
								<div className="publication-content-title">
									<Link to="#">Maecenas tempor lorem sed sapien hendrerit rhoncus</Link>
								</div>
								<div className="publication-content-time">
									<i className="far fa-clock"></i>
									<time>JULY 31, 2018</time>
								</div>
							</div>
						</div>
					</div>
					
					<div id="popular-news" className="container tab-pane fade">
						<div className="publication-inner">
							<div className="publication-img">
								<img src="./img/publication 3.jpg" alt="" />
							</div>
							<div className="publication-content">
								<div className="publication-content-title">
									<Link to="#">Maecenas tempor lorem sed sapien hendrerit rhoncus</Link>
								</div>
								<div className="publication-content-time">
									<i className="far fa-clock"></i>
									<time>JULY 31, 2018</time>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
		);
	}
}

export default NewsAndPublications;