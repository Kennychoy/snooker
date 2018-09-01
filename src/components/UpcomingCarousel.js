import React, { Component } from 'react';
import {Link} from "react-router-dom";

class UpcomingCarousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}
	render(){
		return (
			<div className={this.props.classes}>
				<div className="row">
						
					<div className="col-md-5 col-12 carousel-time-date">
						<div className="row">
							<div className="col-xl-4 col-lg-12 col-12 time-wrapper">
								<div className="upcoming-date">
									<div className="upcoming-day">{this.props.eventTime.getDate()}</div>
									<div className="upcoming-month">{this.convertMonth(this.props.eventTime.getMonth())}</div>
								</div>
								<div className="upcoming-time-weekday">
									<div className="upcoming-time">
										{this.props.eventTime.getHours() < 10 ? "0" + this.props.eventTime.getHours() : this.props.eventTime.getHours()}
										:
										{this.props.eventTime.getMinutes() < 10 ? "0" + this.props.eventTime.getMinutes() : this.props.eventTime.getMinutes()}</div>
									<div className="upcoming-weekday">{this.convertWeekday(this.props.eventTime.getDay())}</div>
								</div>
							</div>
							<div className="col-xl-8 col-lg-12 col-12 upcoming-photo">
								<div className="upcoming-img-wrapper">
									<div className="upcoming-img">
										<img src={this.props.img} alt="" className="img-responsive" />
									</div>
								</div>
							</div>
						</div>
					</div>
						
					<div className="col-md-7 col-12 carousel-details">
						<div className="event-title">{this.props.title}</div>
						<div className="event-location">
							<span><i className="fas fa-map-marker-alt"></i></span>
							<div className="event-address">{this.props.location}</div>
						</div>
						<div className="event-countdown">
							<div className="event-countdown-wrapper">
								<div className="event-countdown-num" id="countdown-day">{this.state.days}</div>
								<div className="event-countdown-unit">DAYS</div>
							</div>
							<div className="event-countdown-wrapper">
								<div className="event-countdown-num" id="countdown-hr">{this.state.hours}</div>
								<div className="event-countdown-unit">HRS</div>
							</div>
							<div className="event-countdown-wrapper">
								<div className="event-countdown-num" id="countdown-min">{this.state.minutes}</div>
								<div className="event-countdown-unit">MINS</div>
							</div>
							<div className="event-countdown-wrapper">
								<div className="event-countdown-num" id="countdown-sec">{this.state.seconds}</div>
								<div className="event-countdown-unit">SECS</div>
							</div>
						</div>
						<div className="event-description">
							{this.props.desc}
						</div>
						<div className="event-btns">
							<div className="event-share">
								<button>
									<ul className="share-list">
										<li className="expand-shareList"><i className="fas fa-share-alt"></i></li>
										<li>SHARE</li>
										<li><Link to="#"><i className="fab fa-facebook-f social-icons"></i></Link></li>
										<li><Link to="#"><i className="fab fa-twitter social-icons"></i></Link></li>
										<li><Link to="#"><i className="fab fa-google-plus-g social-icons"></i></Link></li>
										<li><Link to="#"><i className="fab fa-instagram social-icons"></i></Link></li>
									</ul>													
								</button>
							</div>
							<div className="event-readmore">
								<button>READ MORE</button>
							</div>
							<div className="event-buytickets">
								<button>BUY TICKETS</button>
							</div>
						</div>
					</div>
				</div>
			{/* .carousel-item */}	
			</div>
		);
	}
	convertMonth = (month) => {
		let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "Oct", "Nov", "Dec"];
		return monthArr[month];
	}
	convertWeekday = (weekday) => {
		let weekArr = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
		return weekArr[weekday];
	}
	componentDidMount(){
		let eventTime = (this.props.eventTime).getTime();
		
		let setCarousel = setInterval(() => {			
			let current = new Date().getTime();
			
			let distance = eventTime - current;
			
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			this.setState({
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			});
			
			if(distance < 0 ){
				clearInterval(setCarousel);
			}
			
		},1000);
	}
}

export default UpcomingCarousel;