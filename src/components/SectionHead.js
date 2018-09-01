import React, { Component } from 'react';
import { Container } from "reactstrap";
import AboutDropdown from "./AboutDropdown";

class SectionHead extends Component {

	render(){
		return (			
			<Container className="section-head">
				<div className="head-text">
					<h5>{this.props.title}</h5>
				</div>
				
				<div className="select-wrapper">
					{this.props.dropdowns.map( (item, i) => {
						return (
							<AboutDropdown options={item.arr} key={i}/>
						);
					})}
				</div>
			</Container>

		);
	}
}

export default SectionHead;