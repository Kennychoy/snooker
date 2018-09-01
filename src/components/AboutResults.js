import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import SectionHead from "./SectionHead"
import "./AboutResults.css";

class AboutResults extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: [
				{
					playerA_img: "http://kennytesting.000webhostapp.com/snooker/img/player 1.jpg",
					playerA_name: "Mark Selby",
					playerA_country: "England",
					playerA_frames: 11,
					playerB_img: "http://kennytesting.000webhostapp.com/snooker/img/player 2.jpg",
					playerB_name: "Ronnie O'Sullivan",
					playerB_country: "England",
					playerB_frames: 13,
					time: "Center Stadium / 15 Aug, 2018"
				},
				{
					playerA_img: "http://kennytesting.000webhostapp.com/snooker/img/player 3.jpg",
					playerA_name: "Neil Robertson",
					playerA_country: "Australia",
					playerA_frames: 13,
					playerB_img: "http://kennytesting.000webhostapp.com/snooker/img/player 4.jpg",
					playerB_name: "Mark Williams",
					playerB_country: "Walsh",
					playerB_frames: 12,
					time: "Sports Center / 14 Aug, 2018"
				},
				{
					playerA_img: "http://kennytesting.000webhostapp.com/snooker/img/player 5.jpg",
					playerA_name: "Shaun Murphy",
					playerA_country: "England",
					playerA_frames: 13,
					playerB_img: "http://kennytesting.000webhostapp.com/snooker/img/player 6.jpg",
					playerB_name: "Peter Edbon",
					playerB_country: "England",
					playerB_frames: 10,
					time: "147 Snooker Club / 12 Aug, 2018"
				},
				{
					playerA_img: "http://kennytesting.000webhostapp.com/snooker/img/player 7.jpg",
					playerA_name: "Marco Fu",
					playerA_country: "Hong Kong",
					playerA_frames: 11,
					playerB_img: "http://kennytesting.000webhostapp.com/snooker/img/player 8.jpg",
					playerB_name: "Ding Junhui",
					playerB_country: "China",
					playerB_frames: 13,
					time: "Great Park / 11 Aug, 2018"
				}
			],
			dropdowns: [
				{
					arr: ["German Master", "China Open", "World Championships", "Bet 365 Classic", "Pot Black Cup"]
				},
				{					
					arr: ["Final", "Last 16", "Last 32", "Qualify", "Peripheral"]						
				},
				{
					arr: [2018, 2017, 2016, 2015, 2014]
				}
			]
		}
	}
	render(){
		return (
			<div className="about-result">
			
				<SectionHead dropdowns={this.state.dropdowns} title="LATEST GAMES RESULTS"/>
				
				<Container>
					<Row>

						{this.state.results.map( (item, i) => {
							return (
								<Col lg="6" xs="12" key={i}>
									<div className="about-result-wrapper">
										<div className="about-result-details">
											<div className="about-player-a about-player">
												<div className="about-player-img">
													<div className="about-player-img-inner">
														<img src={item.playerA_img} alt="" />
													</div>
												</div>
												<div className="about-player-text">
													<div className="about-player-name text-center">{item.playerA_name}</div>
													<div className="about-player-country text-center">{item.playerA_country}</div>
												</div>
											</div>
											<div className="about-score">
												<div className="about-playerA-frames about-frames">{item.playerA_frames}</div>
												<span className="result-colon">:</span>
												<div className="about-playerB-frames about-frames">{item.playerB_frames}</div>
											</div>
											<div className="about-player-b about-player">
												<div className="about-player-img">
													<div className="about-player-img-inner">
														<img src={item.playerB_img} alt="" />
													</div>
												</div>
												<div className="about-player-text">
													<div className="about-player-name text-center">{item.playerB_name}</div>
													<div className="about-player-country text-center">{item.playerB_country}</div>
												</div>
											</div>
										</div>
										<div className="about-results-location text-center">{item.time}</div>
									</div>
								</Col>
							);
						})}
						
					</Row>
				</Container>
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".about-result-details").forEach( result => {
			let playerA_result = Number(result.querySelector(".about-playerA-frames").innerHTML);
			let playerB_result = Number(result.querySelector(".about-playerB-frames").innerHTML);
			if(playerA_result > playerB_result){
				result.querySelector(".about-playerA-frames").classList.add("won");
			} else {
				result.querySelector(".about-playerB-frames").classList.add("won");
			}
		});
	}
}

export default AboutResults;