import React, { Component } from 'react';

import {Link} from "react-router-dom";

class News extends Component {
	render(){
		return (
			<div className="news bg-light">
				<div className="container">
					<div className="row">
					
						<div className="spotlight-news col-md-8">
						
							<div className="homepage-titles spotlight-news-title">
								<h5>IN THE SPOTLIGHT</h5>
								<button className="all-news-btn" formAction="#">ALL NEWS</button>
							</div>
							
							<div className="spotlight-news-wrapper bg-light">
								<div className="row">
								
									<div className="col-12 spotlight-news-single bg-light">
										<div className="single-wrapper">
									
											<div className="spotlight-news-subtle">
											
												<div className="spotlight-news-cat">
													<span className="badge badge-success">TOURANMENT</span>
												</div>
												<div className="spotlight-news-date">
													<time>APRIL 15, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">234</span>
												</div>
											
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h4>
											</div>
											
											<div className="spotlight-news-excerpt">
												<p>Sed sed turpis nibh. Suspendisse potenti. Aliquam vitae libero hendrerit, placerat nulla et, accumsan nisi. Nunc volutpat ipsum id lacus faucibus congue. Vestibulum pharetra mi sit amet nunc sagittis, eu fermentum erat laoreet. Nullam quis lorem ac lacus fermentum mollis luctus eget turpis. Suspendisse potenti...</p>
											</div>
											
											<div className="spotlight-news-img">
												<img src="./img/news 1.jpg" alt="" />
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">345 COMMENTS</span>												
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
										</div>
									{/*spotlight-news-single*/}	
									</div>
								
									<div className="col-6 spotlight-news-single bg-light">
										<div className="single-wrapper">
											<div className="spotlight-news-subtle">
											
												<div className="spotlight-news-cat">
													<span className="badge badge-danger">Q SCHOOL</span>
												</div>
												<div className="spotlight-news-date">
													<time>MAY 7, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">254</span>
												</div>
											
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Curabitur tempor lacus turpis, eget feugiat augue hendrerit nec</Link></h4>
											</div>
											
											<div className="spotlight-news-excerpt">
												<p></p>
											</div>
											
											<div className="spotlight-news-img">
												<img src="./img/news 2.jpg" alt="" />
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">300 COMMENTS</span>												
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
										</div>
									{/*spotlight-news-single*/}	
									</div>
									
									<div className="col-6 spotlight-news-single bg-light">
										<div className="single-wrapper">
											<div className="spotlight-news-subtle">
											
												<div className="spotlight-news-cat">
													<span className="badge badge-danger">Q SCHOOL</span>
												</div>
												<div className="spotlight-news-date">
													<time>MAY 7, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">254</span>
												</div>
											
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Curabitur tempor lacus turpis, eget feugiat augue hendrerit nec</Link></h4>
											</div>
											
											<div className="spotlight-news-excerpt">
												<p></p>
											</div>
											
											<div className="spotlight-news-img">
												<img src="./img/news 2.jpg" alt="" />
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">300 COMMENTS</span>												
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
										</div>
									{/*spotlight-news-single*/}	
									</div>
									
									<div className="col-12 spotlight-news-single bg-light">
										<div className="single-wrapper">
											<iframe src="https://www.youtube.com/embed/QVZcJOmdU_g" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title=""></iframe>
										</div>
									{/*spotlight-news-single*/}	
									</div>
									
									<div className="col-6 spotlight-news-single bg-light">
										<div className="single-wrapper">
											<div className="spotlight-news-subtle">
											
												<div className="spotlight-news-cat">
													<span className="badge badge-danger">Q SCHOOL</span>
												</div>
												<div className="spotlight-news-date">
													<time>MAY 7, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">254</span>
												</div>
											
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Curabitur tempor lacus turpis, eget feugiat augue hendrerit nec</Link></h4>
											</div>
											
											<div className="spotlight-news-excerpt">
												<p></p>
											</div>
											
											<div className="spotlight-news-img">
												<img src="./img/news 2.jpg" alt="" />
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">300 COMMENTS</span>												
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
										</div>
									{/*spotlight-news-single*/}	
									</div>
									
									<div className="col-6 spotlight-news-single bg-light">	
										<div className="single-wrapper">
											<div className="spotlight-news-subtle">										
												<div className="spotlight-news-cat">
													<span className="badge badge-danger">Q SCHOOL</span>
												</div>
												<div className="spotlight-news-date">
													<time>MAY 7, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">254</span>
												</div>										
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Curabitur tempor lacus turpis, eget feugiat augue hendrerit nec</Link></h4>
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">300 COMMENTS</span>												
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
										</div>
										
										<div className="single-wrapper">
											<div className="spotlight-news-subtle">										
												<div className="spotlight-news-cat">
													<span className="badge badge-danger">Q SCHOOL</span>
												</div>
												<div className="spotlight-news-date">
													<time>MAY 7, 2018</time>
												</div>
												<div className="spotlight-news-views">
													<i className="far fa-eye"></i>
													<span className="spotlight-news-views-num">254</span>
												</div>										
											</div>
											
											<div className="spotlight-news-title">
												<h4><Link to="#">Curabitur tempor lacus turpis, eget feugiat augue hendrerit nec</Link></h4>
											</div>
											
											<div className="spotlight-news-footer">
											
												<div className="spotlight-news-comments">
													<i className="far fa-comment-alt"></i>
													<span className="spotlight-news-comments-num">300 COMMENTS</span>												
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
										</div>
										
									{/*spotlight-news-single*/}	
									</div>
									
									<div className="col-6 spotlight-news-single">	

									{/*spotlight-news-single*/}	
									</div>
									
								</div>
							</div>
							
						</div>
						
						<div className="sidebar col-md-4">
						
							<div className="homepage-titles hot-news-title">
								
								<h5><i className="fas fa-fire"></i>HOT NEWS</h5>								
							</div>
							
							<div className="hot-news-wrapper">
								<article>
									<div className="hot-hours">4 HOURS AGO</div>
									<div className="hot-headlines">
										<Link to="#">Nam imperdiet urna a ligula placerat porta.</Link>
									</div>
								</article>
								<article>
									<div className="hot-hours">16 HOURS AGO</div>
									<div className="hot-headlines">
										<Link to="#">Aliquam rhoncus mi nec tristique luctus.</Link>
									</div>
								</article>
								<article>
									<div className="hot-hours">1 DAY AGO</div>
									<div className="hot-headlines">
										<Link to="#">eu rhoncus nunc turpis at ex.</Link>
									</div>
								</article>
								<article>
									<div className="hot-hours">2 DAYS AGO</div>
									<div className="hot-headlines">
										<Link to="#">Maecenas eu interdum diam.</Link>
									</div>
								</article>
							</div>
							
						</div>
					
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
		
		document.querySelectorAll(".spotlight-news-shares").forEach( div => {
			if(div.closest(".spotlight-news-single").classList.contains("col-12")){
				div.querySelector('ul').children[0].style.display = "none";
			} else {				
				div.querySelector('ul').style.position = "absolute";
				div.querySelector('ul').style.display = "flex";
				div.querySelector('ul').style.flexDirection = "column-reverse";
				div.querySelector('ul').style.transform = "translateY(-80%)";
				div.querySelector('ul').style.left = "40px";
				div.querySelector('ul').style.lineHeight = 1;
				div.querySelector('ul').children[(div.querySelector('ul').children.length)-1].style.marginTop = '15px';
				div.querySelector('ul').previousSibling.style.marginRight = "40px";
				
				div.querySelector('ul').addEventListener("mouseenter", () => {
					div.querySelector('ul').parentElement.style.overflow = "visible"
				});
				
				div.querySelector('ul').addEventListener("mouseleave", () => {
					div.querySelector('ul').parentElement.style.overflow = "hidden"
				});
				
			}
		});
		
		document.querySelectorAll(".single-wrapper iframe").forEach( iframe => {
			iframe.parentNode.style.padding = 0;
		});
	}
}

export default News;