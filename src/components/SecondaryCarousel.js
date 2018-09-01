import React, { Component } from 'react';
import $ from 'jquery'
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "./SecondaryCarousel.css";

class SecondaryCarousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			items: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/secondary-carousel-1.jpg",
					youtubeid: "urm11Joioz8",
					playBtn: <i className="fas fa-play"></i>,
					badge: <span className="carousel-cat badge">Q SCHOOL</span>,
					link: "#",
					title: "2018 WORLD GAMES: MEN RESULT",
					date: "APRIL 15, 2018",
					comments: "123",
					views: "188"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/secondary-carousel-2.jpg",
					youtubeid: "",
					playBtn: <i></i>,
					badge: <span className="carousel-cat badge">TOURNAMENT</span>,
					link: "#",
					title: "INTERVIEWING THE LENGEND: RONNIE",
					date: "APRIL 15, 2018",
					comments: "133",
					views: "198"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/secondary-carousel-3.jpg",
					youtubeid: "pWWKt2HipVc",
					playBtn: <i className="fas fa-play"></i>,
					badge: <span className="carousel-cat badge">Q SCHOOL</span>,
					link: "#",
					title: "TWO 147S IN A ROW - NEIL ROBERTSON",
					date: "APRIL 15, 2018",
					comments: "224",
					views: "301"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/secondary-carousel-4.jpg",
					youtubeid: "",
					playBtn: <i></i>,
					badge: <span className="carousel-cat badge">TOURNAMENT</span>,
					link: "#",
					title: "UNSOLVABLE SNOOKER?",
					date: "APRIL 15, 2018",
					comments: "187",
					views: "288"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/secondary-carousel-5.jpg",
					youtubeid: "0rRw3wybw2A",
					playBtn: <i className="fas fa-play"></i>,
					badge: <span className="carousel-cat badge">Q School</span>,
					link: "#",
					title: "POTTING TIPS FROM THE CHAMPIONS",
					date: "APRIL 15, 2018",
					comments: "155",
					views: "302"
				}
			]
		}
	}

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
    return (
	<div className="secondary-carousel bg-light">
	
		<div className="youtube-layer">
			<div className="youtube-inner">
				<button type="button" className="close">&times;</button>
				<iframe frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title=""></iframe>
			</div>
		</div>
	
		<div className="container-fluid">
			<Slider {...settings}>
			
				{this.state.items.map( (item, i) => {
					return (
						<div className="carousel-wrapper" key={i}>
							<img src={item.img} alt="" className="img-responsive"/>
							
							<div className="carousel-play" data-youtubeid={item.youtubeid}>
								{item.playBtn}
							</div>
							
							<div className="carousel-text">
								{item.badge}						
								<div className="carousel-title"><h2><Link to={item.link}>{item.title}</Link></h2></div>
								<div className="carousel-details">
									<div className="details-data details-subtle">
										<i className="far fa-clock"></i>
										<div className="details-text">{item.date}</div>
									</div>
									<div className="details-comment details-subtle">
										<i className="far fa-comment-alt"></i>
										<div className="details-text">{item.comments}</div>
									</div>
									<div className="details-views details-subtle">
										<i className="far fa-eye"></i>
										<div className="details-text">{item.views}</div>
									</div>
								</div>
							</div>
							
						</div>
					);
				})}
				
			</Slider>
		</div>
	</div>
    );
  }
	componentDidMount(){
		
		document.querySelectorAll(".carousel-cat").forEach( badge => {
			let value = badge.innerHTML;
			if(value.toUpperCase() == "Q SCHOOL"){
				badge.classList.add("badge-danger");
			} else {
				badge.classList.add("badge-success");
			}
		});
		
		document.querySelectorAll(".carousel-play").forEach( video => {
			video.addEventListener("click", () => {
				let path = "https://www.youtube.com/embed/";
				let videoID = video.getAttribute("data-youtubeid") || video.parentElement.getAttribute("data-youtubeid");
				document.querySelector(".youtube-inner iframe").setAttribute("src", path + videoID);
				document.querySelector(".youtube-layer").style.zIndex = 17;
				document.querySelector(".youtube-inner").style.transform = "translate(-50%, -50%)";
			});
		});
		
		document.querySelector(".youtube-inner button").addEventListener("click", () => {
			document.querySelector(".youtube-layer").style.zIndex = -1;
			document.querySelector(".youtube-inner").style.transform = "translate(-50%, -20%)";
		});
		
		document.querySelectorAll(".carousel-wrapper").forEach( wrapper => {
			wrapper.addEventListener("mouseenter", () => {
				wrapper.children[0].style.transform = "scale(1.2)";
			});
		});
		
		document.querySelectorAll(".carousel-wrapper").forEach( wrapper => {
			wrapper.addEventListener("mouseleave", () => {
				wrapper.children[0].style.transform = "scale(1)";
			});
		});
	}
}

export default SecondaryCarousel;