import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import PageTitle from "./PageTitle.js";
import Timeline from "./Timeline.js";
import AboutResults from "./AboutResults";
import AboutStandings from "./AboutStandings";
import UpcomingEvent from "./UpcomingEvent";

import "./AboutMain.css";

import Sidebar from "./Sidebar";
import Standings from "./Standings.js";
import PlayerAwards from "./PlayerAwards.js";
import AboutFollowUs from "./AboutFollowUs.js";
import PlayerNews from "./PlayerNews.js";
import AwardsCarousel from "./AwardsCarousel";

class AboutMain extends Component {
	constructor(props){
		super(props);
		this.state = {			
			timeline: [
				{
					year: 2005,
					title: "Duis eget imperdiet tellus.",
					text: "Nam in efficitur diam. Quisque quis placerat justo. Nam rutrum hendrerit metus vitae sodales. Sed vitae turpis finibus, hendrerit lacus non, aliquet justo. Nam a faucibus arcu. Pellentesque finibus iaculis mi in rhoncus. Pellentesque tempor, tellus eu facilisis feugiat, lacus dui accumsan ex, eu lacinia enim urna sit amet nulla."
				},
				{
					year: 2008,
					title: "dapibus sed magna eu",
					text: "Vivamus interdum consequat nulla id facilisis. Vivamus sed lectus eros. Donec dictum est at volutpat vehicula. Maecenas pellentesque velit et enim egestas, vel sodales nunc pulvinar. Curabitur ut lorem enim. Phasellus ipsum ex, suscipit vitae facilisis at, posuere et libero. Maecenas consectetur, magna ut consequat bibendum, "
				},
				{
					year: 2012,
					title: "sapien nibh interdum ligula",
					text: "sit amet lobortis ligula ipsum ornare ipsum. Nam eget purus nunc. Fusce consectetur enim quam, quis mollis nisi scelerisque nec. Etiam ultrices dapibus tempus. Duis eget imperdiet tellus. Aenean neque nunc, dapibus ut ipsum ut, venenatis hendrerit nunc. Ut ac tempus augue."
				},
				{
					year: 2015,
					title: "Ut sit amet urna volutpat",
					text: "Praesent gravida porta elit, quis malesuada arcu. Mauris molestie id est a tempor. Vestibulum sed quam sed enim porttitor hendrerit. Vestibulum ante felis, ornare id consequat ac, molestie sodales risus. Curabitur dictum massa in nibh condimentum, fringilla ultrices massa mollis. In nec vestibulum nibh, ut efficitur nisl."
				},
				{
					year: 2018,
					title: "Praesent lobortis enim a facilisis tincidunt.",
					text: "Etiam ac euismod orci. Nam posuere maximus nisi. Mauris id ante quis enim sollicitudin eleifend quis vitae elit. Suspendisse condimentum posuere sapien, accumsan consequat odio feugiat eu. Vivamus congue massa ullamcorper lectus egestas, vitae dictum sapien imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
				}
			],
			sidebarcontent: [
				<Standings />,
				<AwardsCarousel />,
				<AboutFollowUs />,
				<PlayerNews />
			]
		}
	}
	render(){
		return (
			<main className="about-main">
				<Container>
					<Row>
						<Col lg="8" xs="12">
							<PageTitle classes="" title="PLAYER OVERVIEW"/>
							<div className="about-major">
								<div className="player-overview">
									
									<div className="about-player-head">
										<div className="about-player-img">
											<img src="http://kennytesting.000webhostapp.com/snooker/img/player-face.JPG" alt="" />
										</div>
										<div className="about-player-desc">
											<div className="about-player-info">
												<div className="about-player-name">MR. SNOOKER</div>
												<div className="about-player-birthplace">LONDON, UK</div>
											</div>
											
											<div className="about-player-misc">
												<div className="about-misc-subtle">
													<span className="about-misc-key">AGE</span>
													<span className="about-misc-value">25</span>
												</div>
												<div className="about-misc-subtle">
													<span className="about-misc-key">HEIGHT</span>
													<span className="about-misc-value">5'7"</span>
												</div>
												<div className="about-misc-subtle">
													<span className="about-misc-key">WEIGHT</span>
													<span className="about-misc-value">80 KG</span>
												</div>
												<div className="about-misc-subtle">
													<span className="about-misc-key">TOTAL GAMES</span>
													<span className="about-misc-value">133</span>
												</div>
											</div>
											<div className="about-player-skills">
												<div className="range-container">
													<label htmlFor="save">SAVE</label>
													<input onChange={()=> {}} type="range" value="95" name="save" className="range-inner" />
													<span className="range-percentage">95%</span>													
												</div>
												<div className="range-container">
													<label htmlFor="longpot">POT</label>
													<input onChange={()=> {}} type="range" value="80" name="pot" className="range-inner" />
													<span className="range-percentage">80%</span>													
												</div>
											</div>
										</div>
									</div>
									<div className="about-player-bio">
										<div className="bio-title">BIOGRAPHY</div>
										<div className="bio-intro">Nam aliquam lorem eget est cursus laoreet. Quisque quis enim id turpis bibendum tincidunt nec quis massa. Vestibulum non quam augue. Aenean in condimentum libero, sed vestibulum leo.</div>
										<div className="bio-desc">
											<p>Maecenas augue magna, laoreet varius elit ut, pulvinar sodales nibh. Pellentesque lacinia, metus ac venenatis semper, justo justo commodo tellus, ut auctor risus eros sit amet justo.</p>
											<p>Nullam finibus enim lacus, vel rhoncus massa gravida sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
											<p>Aenean mi sapien, euismod id faucibus vitae, placerat in nibh. Aenean commodo aliquam eleifend. Nullam at tortor sit amet quam pharetra vestibulum eu sed justo. Nunc pretium eros dapibus, elementum sem vel.</p>
										</div>
									</div>
									
									<div className="achievements">
										{this.state.timeline.map( (item, i) => {
											return (
												<Timeline 
													year={item.year} 
													title={item.title} 
													text={item.text} 
													key={i} 
												/>
											);
										})}
									</div>
									
								</div>
							</div>
						</Col>
						
						<Sidebar sidebarcontent={this.state.sidebarcontent} />

					</Row>
				</Container>
				
				<AboutResults />
				<AboutStandings />
				<UpcomingEvent />
			</main>
		);
	}
}

export default AboutMain;