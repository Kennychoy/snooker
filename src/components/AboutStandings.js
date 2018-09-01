import React, { Component } from 'react';
import {Container, Row, Col, Table} from "reactstrap";
import SectionHead from "./SectionHead";
import "./AboutStandings.css";

class AboutStandings extends Component {
	constructor(props){
		super(props);
		this.state = {
			dropdowns: [
				{
					arr: ["Pot Black Cup", "Scottish Open", "World Championships", "German Master", "China Open"]
				},
				{
					arr: [2018, 2017, 2016, 2015, 2015]
				}
			],
			standings: [
				{
					pos: 1,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 1.jpg",
					name: "Mark Selby",
					country: "England",
					won: 54,
					final: 66,
					quarter: 76,
					pts: 288,
					updown: "+1",
					add_won: "+5",
					add_final: "-4",
					add_quarter: "-3"
				},
				{
					pos: 2,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 2.jpg",
					name: "Ronnie O'Sullivan",
					country: "England",
					won: 50,
					final: 56,
					quarter: 34,
					pts: 266,
					updown: "-1",
					add_won: "+5",
					add_final: "-2",
					add_quarter: "-1"
				},
				{
					pos: 3,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 3.jpg",
					name: "Neil Robertson",
					country: "Australia",
					won: 47,
					final: 52,
					quarter: 77,
					pts: 264,
					updown: "+3",
					add_won: "+5",
					add_final: "-3",
					add_quarter: "+3"
				},
				{
					pos: 4,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 4.jpg",
					name: "Mark Williams",
					country: "Walsh",
					won: 44,
					final: 55,
					quarter: 65,
					pts: 253,
					updown: "-2",
					add_won: "+5",
					add_final: "+7",
					add_quarter: "-1"
				},
				{
					pos: 5,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 5.jpg",
					name: "Shaun Murphy",
					country: "England",
					won: 41,
					final: 34,
					quarter: 46,
					pts: 246,
					updown: "-",
					add_won: "+4",
					add_final: "-4",
					add_quarter: "-2"
				},
				{
					pos: 6,
					img: "http://kennytesting.000webhostapp.com/snooker/img/table player 6.jpg",
					name: "Peter Edbon",
					country: "England",
					won: 39,
					final: 57,
					quarter: 75,
					pts: 236,
					updown: "+1",
					add_won: "-",
					add_final: "+6",
					add_quarter: "-4"
				},
			]
		}
	}
	changeIcon = (e) => {
		let el = e.target;
		if(el.nodeName !== "I"){
			el = el.querySelector("i")
		}
		if(el.classList.contains("fa-plus")){
			el.classList.remove("fa-plus");
			el.classList.add("fa-minus");
		} else {
			el.classList.remove("fa-minus");
			el.classList.add("fa-plus");
		}
		
		e.target.closest(".standings-content").classList.toggle("expand-standings-content");
	}
	render(){
		return (
			<div className="about-standings">
			
				<SectionHead title="STANDINGS" dropdowns={this.state.dropdowns} />
				
				<div className="standings-table">
					<Container>
						<Row className="table-head">
							<Col xs="1">POS</Col>
							<Col xs="5">PLAYER</Col>
							<Col xs="1">WON</Col>
							<Col xs="1">FINAL</Col>
							<Col xs="1">{window.innerWidth > 768 ? "QUARTER" : "1/4"}</Col>
							<Col xs="1">PTS</Col>
							<Col xs="1">{window.innerWidth > 768 ? "UP/DOWN" : "U/D"}</Col>
							<Col xs="1"></Col>
						</Row>
						{this.state.standings.map((item, i) => {
							return (
								<Row className="standings-content" id={"tableRow-"+i} key={i}>
									<Col xs="1">{i+1}</Col>
									<Col xs="5">
										<div className="table-img-name">
											<div className="table-img">
												<img src={item.img} alt="" />
											</div>
											<div className="table-name">
												<div className="player-name">{item.name}</div>
												<div className="player-country">{item.country}</div>
											</div>
										</div>
									</Col>
									<Col xs="1">{item.won}</Col>
									<Col xs="1">{item.final}</Col>
									<Col xs="1">{item.quarter}</Col>
									<Col xs="1">{item.pts}</Col>
									<Col xs="1">{item.updown}</Col>
									<Col xs="1" className="toggle-btn" onClick={this.changeIcon}>
										<a href={"#table-collapse-"+i} data-toggle="collapse">
											<i className="fas fa-plus"></i>
										</a>
									</Col>
									<Col xs="6" className="offset-6 collapse expand-row" id={"table-collapse-"+i} data-parent={"#tableRow-"+i}>
										<Row>
										<Col xs="2">{item.add_won}</Col>
										<Col xs="2">{item.add_final}</Col>
										<Col xs="2">{item.add_quarter}</Col>
										</Row>
									</Col>						
								</Row>
							);
						})}
					</Container>
				</div>

				
			</div>
		);
	}	
}

export default AboutStandings;