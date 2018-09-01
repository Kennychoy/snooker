import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PagePortal from "./PagePortal";
import PageTitle from "./PageTitle";
import { Container, Row, Col, Badge } from "reactstrap";
import CustomPagination from "./CustomPagination";
import "./News.css";

class News extends Component {
	constructor(props){
		super(props);
		this.state = {
			news: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 1.jpg",
					badge: true,
					badgecolor: "primary",
					badgetext: "Primary",
					youtube: "",
					headline: "Pellentesque ornare at velit eu semper",
					date: "Aug 19, 2018",
					comments: "345",
					views: "366"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 2.jpg",
					badge: false,
					badgecolor: "",
					badgetext: "",
					youtube: "P10xdCIfKJA",
					headline: "Duis ut nunc et est egestas",
					date: "Aug 17, 2018",
					comments: "305",
					views: "378"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 3.jpg",
					badge: true,
					badgecolor: "danger",
					badgetext: "danger",
					youtube: "",
					headline: "Quisque egestas ipsum quis",
					date: "Aug 16, 2018",
					comments: "315",
					views: "371"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 4.jpg",
					badge: true,
					badgecolor: "danger",
					badgetext: "danger",
					youtube: "",
					headline: "Vestibulum maximus, risus at cursus",
					date: "Aug 15, 2018",
					comments: "335",
					views: "369"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 5.jpg",
					badge: false,
					badgecolor: "",
					badgetext: "",
					youtube: "qCa4CDZXuG8",
					headline: "lorem sapien luctus augue",
					date: "Aug 14, 2018",
					comments: "365",
					views: "396"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 6.jpg",
					badge: false,
					badgecolor: "",
					badgetext: "",
					youtube: "A6jokwDqhbM",
					headline: "In hac habitasse platea dictumst",
					date: "Aug 13, 2018",
					comments: "286",
					views: "301"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 7.jpg",
					badge: true,
					badgecolor: "primary",
					badgetext: "Primary",
					youtube: "",
					headline: "Aliquam at dui vestibulum dolor porttitor",
					date: "Aug 12, 2018",
					comments: "225",
					views: "266"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 8.jpg",
					badge: true,
					badgecolor: "danger",
					badgetext: "danger",
					youtube: "",
					headline: "Nunc feugiat purus quis velit",
					date: "Aug 11, 2018",
					comments: "305",
					views: "368"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/newspage 9.jpg",
					badge: false,
					badgecolor: "",
					badgetext: "",
					youtube: "qnu0s3miuxs",
					headline: "Cras ullamcorper sem id nunc suscipit",
					date: "Aug 10, 2018",
					comments: "333",
					views: "376"
				},
			]
		}
	}
	popupYT = (e) => {
		let id = e.target.getAttribute("data-yt");
		document.querySelector(".news .youtube-layer").style.zIndex = "2";
		document.querySelector(".news .youtube-layer .video-wrapper").style.transform = "translate(-50%, -50%)";
		document.querySelector(".news .youtube-layer iframe").setAttribute("src", "https://www.youtube.com/embed/"+id);
	}
	closeYT = () => {
		document.querySelector(".news .youtube-layer").style.zIndex = -1;
		document.querySelector(".news .youtube-layer .video-wrapper").style.transform = "translate(-50%, -20%)";
	}
	render(){
		return (
			<div className="news">
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				<div className="news-latestNews">					
					<Container>
						<PageTitle title="LATEST NEWS"/>						
						<Row>
							{this.state.news.map( (item, i) => {
								return (
									<Col lg="4" md="6" xs="12" key={i}>
										<div className="news-single">
											<div className="news-single-inner">
												<div className="news-single-layer"></div>
												<img src={item.img} alt="" />
												<div className="badgeOrBtn">
													{item.badge ? <Badge color={item.badgecolor}>{item.badgetext}</Badge> : void(0)}
													{item.youtube.length > 0 ? <i className="fas fa-play news-youtube" data-yt={item.youtube} onClick={this.popupYT}></i> : void(0)}
												</div>
												<div className="news-details">
													<div className="news-title">
														<Link to="#">{item.headline}</Link>
													</div>
													<div className="news-subtle">
														<div className="news-misc">
															<i className="far fa-clock"></i>
															<div className="icon-text">{item.date}</div>
														</div>
														<div className="news-misc">
															<i className="far fa-comment-alt"></i>
															<div className="icon-text">{item.comments}</div>
														</div>
														<div className="news-misc">
															<i className="far fa-eye"></i>
															<div className="icon-text">{item.views}</div>
														</div>
													</div>
												</div>
											</div>									
										</div>
									</Col>
								);
							})}
						</Row>
						<CustomPagination />
					</Container>
				{/* .news-latestNews */}
				</div>
				<div className="youtube-layer">
					<div className="video-wrapper">
						<span className="close-yt" onClick={this.closeYT}>X</span>
						<iframe frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen"></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default News;