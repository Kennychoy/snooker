import React, { Component } from 'react';
import {Link} from "react-router-dom";

import SpotlightNewsSubtle from "./SpotlightNewsSubtle.js";
import SpotlightNewsFooter from "./SpotlightNewsFooter.js";
import CustomPagination from "./CustomPagination.js";
import Sidebar from "./Sidebar.js";
import "./SpotlightNews.css";

// for sidebar
import HotNews from "./HotNews.js";
import LatestGamesResults from "./LatestGamesResults.js";
import FollowUs from "./FollowUs.js";
import NewsAndPublications from "./NewsAndPublications.js";
import Standings from "./Standings.js";
import HomeSubscribe from "./HomeSubscribe.js";
import HomeShopCarousel from "./HomeShopCarousel.js";

class News extends Component {
	constructor(props){
		super(props);
		this.state = {
			content: [
				{
					category: "TOURANMENT",
					date: "AUG 15, 2018",
					views: 366,
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					excerpt: "Aenean non lacus mauris. Aenean non metus lacinia, mollis massa eget, iaculis nibh. Vivamus non dolor interdum, vehicula ligula at, consequat turpis. Ut elementum egestas nisi et feugiat...",
					img: "./img/news 1.jpg",
					comments: 208,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "Q SCHOOL",
					date: "AUG 10, 2018",
					views: 378,
					title: "Etiam sit amet nunc magna. In ornare ullamcorper tortor.",
					excerpt: "",
					img: "./img/news 2.jpg",
					comments: 301,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "TOURANMENT",
					date: "JUL 30, 2018",
					views: 301,
					title: "nec interdum elit egestas ut. Sed eu pretium velit.",
					excerpt: "",
					img: "./img/news 3.jpg",
					comments: 256,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "TOURANMENT",
					date: "JUL 25, 2018",
					views: 388,
					title: "",
					excerpt: "",
					img: "",
					comments: 300,
					youtubePath: "https://www.youtube.com/embed/",
					youtubeID: "QVZcJOmdU_g"
				},
				{
					category: "Q SCHOOL",
					date: "JUL 20, 2018",
					views: 489,
					title: "volutpat eget erat mattis, mollis tincidunt dui.",
					excerpt: "",
					img: "./img/news 4.jpg",
					comments: 355,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "TOURANMENT",
					date: "JUL 18, 2018",
					views: 299,
					title: "Integer eget mauris ut justo imperdiet euismod",
					excerpt: "",
					img: "",
					comments: 187,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "Q SCHOOL",
					date: "JUL 12, 2018",
					views: 397,
					title: "Cras cursus semper magna, id maximus libero",
					excerpt: "",
					img: "",
					comments: 255,
					youtubePath: "",
					youtubeID: ""
				},
				{
					category: "Q SCHOOL",
					date: "JUL 09, 2018",
					views: 478,
					title: "Vestibulum ut accumsan ipsum.",
					excerpt: "Cras placerat varius massa, eget tincidunt ipsum convallis blandit. Nam tristique velit quis elementum accumsan. Praesent interdum tortor...",
					img: "./img/news 5.jpg",
					comments: 398,
					youtubePath: "",
					youtubeID: ""
				}
			],
			sidebarcontent: [
				<HotNews />,
				<LatestGamesResults />,
				<FollowUs />,
				<NewsAndPublications />,
				<Standings />,
				<HomeSubscribe />,
				<HomeShopCarousel />
			]
		}
	}
	render(){
		return (
			<div className="home-news bg-light">
				<div className="container">
					<div className="row">
					
						<div className="spotlight-news col-lg-8 col-12">
						
							<div className="homepage-titles spotlight-news-title">
								<h5>IN THE SPOTLIGHT</h5>
								<button className="all-news-btn" formAction="#">ALL NEWS</button>
							</div>
							
							<div className="spotlight-news-wrapper bg-light">
								{this.state.content.map(this.categorizeNews)}								
							</div>
							
							<CustomPagination />
							
						</div>
						
						<Sidebar sidebarcontent={this.state.sidebarcontent}/>
					
					</div>
				{/* .container */}
				</div>
			{/* .news */}
			</div>
		);
	}
	categorizeNews = (item, i) => {
		
		if(item.youtubeID !== ""){
			return (
				<div className="md-full spotlight-news-single bg-light" key={i}>
					<div className="single-wrapper">
						<iframe src={item.youtubePath + item.youtubeID} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title=""></iframe>
					</div>
				{/*spotlight-news-single*/}	
				</div>
			)
		} else {
			return (
				<div className={item.excerpt !== "" ? "md-full spotlight-news-single bg-light" : "md-half spotlight-news-single bg-light"} key={i}>
					<div className="single-wrapper">
									
							<SpotlightNewsSubtle 
								newsCatagory={item.category} 
								newsDate={item.date} 
								newsViews={item.views} 
							/>
											
							<div className="spotlight-news-title">
								<h4><Link to="#">{item.title}</Link></h4>
							</div>
											
							<div className="spotlight-news-excerpt">
								<p>{item.excerpt}</p>
							</div>
											
							{item.img !== "" ? <div className="spotlight-news-img"><img src={item.img} alt="" /></div> : void(0)}
											
							<SpotlightNewsFooter commentsNum={item.comments}/>
						</div>
					{/*spotlight-news-single*/}	
				</div>
			)
		}
	}	
	responsiveShare = () => {
		if(window.innerWidth > 768){
			document.querySelectorAll(".spotlight-news-shares").forEach( div => {
				if(div.closest(".spotlight-news-single").classList.contains("md-full")){
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
		}
	}
	componentDidMount(){
		
		window.addEventListener("resize", this.responsiveShare);
		window.addEventListener("load", this.responsiveShare);
		
		document.querySelectorAll(".single-wrapper iframe").forEach( iframe => {
			iframe.parentNode.style.padding = 0;
		});
	}
}

export default News;