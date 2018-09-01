import React from 'react';
import { Table, Badge } from 'reactstrap';
import PageTitle from "./PageTitle.js";
import "./Standings.css";

export default class Standings extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			standings: [
				{
					position: 1,
					name: "SHAUN MURPHY",
					country: "ENGLAND",
					benefit: "$1,234,567"
				},
				{
					position: 2,
					name: "JOHN HIGGINS",
					country: "SCOTLAND",
					benefit: "$1,131,217"
				},
				{
					position: 3,
					name: "DING JUNHUI",
					country: "CHINA",
					benefit: "$1,001,713"
				},
				{
					position: 4,
					name: "NEIL ROBERTSON",
					country: "AUSTRALIA",
					benefit: "$924,334"
				},
				{
					position: 5,
					name: "MARK WILLIAMS",
					country: "WALES",
					benefit: "$906,697"
				}
			]
		}
	}
	render() {
		return (
			<div className="standings col-lg-12 col-md-12 col-12">
			
				<PageTitle 
					title="STANDINGS" 
					badgetextone="FULL STANDINGS"
				/>
					
				<Table hover>
				
					<thead>
						<tr>
							<th>POSITION</th>
							<th>PLAYER</th>
							<th>BENEFIT</th>
						</tr>
					</thead>
					
					<tbody>
						{this.state.standings.map((item, i) => {
							return (
								<tr key={i}>
									<th scope="row"><span>{item.position}</span></th>
									<td>
										<div className="standing-nameandcountry">
											<div className="standing-name">{item.name}</div>
											<div className="standing-country">{item.country}</div>
										</div>
									</td>
									<td>{item.benefit}</td>
								</tr>
							);
						})}
					</tbody>
					
				</Table>
				
			</div>
		);
	}
}