import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class AboutDropdown extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		}
	}
	toggle() {
		this.setState(prevState => ({
		  dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render(){
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>{this.props.options[0]}</DropdownToggle>
				<DropdownMenu>
					{this.props.options.map( (item, i) => {
						return (
							<DropdownItem key={i}>{item}</DropdownItem>
						);
					})}
					<DropdownItem></DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}
}