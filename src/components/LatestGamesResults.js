import React, { Component } from 'react';

class LatestGamesResults extends Component {
	constructor(props){
		super(props);
		this.state = {
			results : [
				{
					playerA_name: "SHAUN MURPHY",
					playerA_country: "ENGLAND",
					playerA_frame: 13,
					playerB_frame: 11,
					playerB_name: "JOHN HIGGINS",
					playerB_country: "SCOTLAND",
					match_details: "CITY HALL / JUL 15, 2018"
				},
				{
					playerA_name: "DING JUNHUI",
					playerA_country: "CHINA",
					playerA_frame: 13,
					playerB_frame: 9,
					playerB_name: "NEIL ROBERTSON",
					playerB_country: "AUSTRALIA",
					match_details: "CENTER PARK / JUL 13, 2018"
				},
				{
					playerA_name: "MARK WILLIAMS",
					playerA_country: "WALES",
					playerA_frame: 12,
					playerB_frame: 13,
					playerB_name: "RONNIE O'SULLIVAN",
					playerB_country: "ENGLAND",
					match_details: "LEFT STADIUM / JUL 12, 2018"
				}			
			]
		}
	}
	render(){
		return (
			<div className="latest-games-results col-lg-12 col-md-6 col-12">
			
				<div className="homepage-titles latest-title">								
					<h5>LATEST GAMES RESULTS</h5>								
				</div>
				
				<div className="latest-results-wrapper">
					{this.state.results.map( (item, i) => {
						return (
							<article key={i}>
								<div className="results-details" key={i}>										
									<div className="player">
										<div className="player-name player_a">{item.playerA_name}</div>
										<div className="player-country">{item.playerA_country}</div>
									</div>
									<div className="results-frames">
										<span className="player-a-frames">{item.playerA_frame}</span>
										<span className="results-colon">:</span>
										<span className="player-b-frames">{item.playerB_frame}</span>
									</div>
									<div className="player">
										<div className="player-name player_b">{item.playerB_name}</div>
										<div className="player-country">{item.playerB_country}</div>
									</div>
								</div>
								<div className="results-time-location">
									{item.match_details}
								</div>
							</article>
						);
					})}
				</div>
				
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".results-details").forEach( result => {
			if(Number(result.querySelector(".player-a-frames").innerHTML) > Number(result.querySelector(".player-b-frames").innerHTML)){
				result.querySelector(".player_a").classList.add("winner");
			} else {
				result.querySelector(".player_b").classList.add("winner");
			}
		});
	}
}

export default LatestGamesResults;