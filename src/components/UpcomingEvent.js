import React, { Component } from 'react';
import {Link} from "react-router-dom";

import UpcomingCarousel from "./UpcomingCarousel";
import "./UpcomingEvent.css";

class UpcomingEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
			events: [
				{
					img: 'http://kennytesting.000webhostapp.com/snooker/img/upcoming 1.jpg',
					title: "O'MIN SUMMER PROMOTION",
					location: "147 SNOOKER CLUB",
					desc: "Every wand chooses it's wizard. So does cues. Come and join the O'min Christmas promotion to pick your own wand.",
					eventTime: new Date(2018, 11, 25, 20, 0, 0),
					classes: "carousel-item active"
				},
				{
					img: 'http://kennytesting.000webhostapp.com/snooker/img/upcoming 2.jpg',
					title: "BAD BOY TRUMP FANS MEETING",
					location: "GRAND CITY HALL",
					desc: "Welcome back Judd Trump after winning the Mars Championship. Guests could have a selfie with Trump.",
					eventTime: new Date(2018, 10, 30, 18, 30, 0),
					classes: "carousel-item"
				}
			]
		}
	}
	render(){
		return (
			<div className="upcoming-event bg-light">
				<div className="container">
				
					<div className="upcoming-heading">
					
						<div className="upcoming-title homepage-titles">
							<h5>UPCOMING EVENTS</h5>
						</div>
						
						<div className="upcoming-controls d-flex">
							<a className="carousel-control-prev" href="#upcoming-carousel" data-slide="prev">
								<button><span className="carousel-control-prev-icon">&lt;</span></button>
							</a>
							<a className="carousel-control-next" href="#upcoming-carousel" data-slide="prev">
								<button><span className="carousel-control-next-icon">&gt;</span></button>
							</a>
						</div>
						
					</div>
					
					<div id="upcoming-carousel" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
						
							{this.state.events.map((item, i) => {
								return (
									<UpcomingCarousel 
										img={item.img} 
										title={item.title} 
										location={item.location} 
										desc={item.desc} 
										eventTime={item.eventTime}
										classes={item.classes} 
										key={i}
									/>
								);
							})}
							
						{/* .carousel-inner */}
						</div>						
					{/* #upcoming-carousel */}	
					</div>
					
				</div>
			</div>
		);
	}
	componentDidMount(){

	}
}

export default UpcomingEvent;