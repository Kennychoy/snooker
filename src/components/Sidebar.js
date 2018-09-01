import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Sidebar extends Component {	
	constructor(props){
		super(props);
		this.state = {
			sidebarcontent: []
		}
	}
	render(){
		return (
			<div className="sidebar col-lg-4 col-12">
				<div className="row">
					{this.state.sidebarcontent.map((item, i) => {
						return (item)
					})}
				</div>
			{/* .sidebar */}	
			</div>	
		);
	}
	componentDidMount(){
		this.setState({sidebarcontent: this.props.sidebarcontent});
	}
}
export default Sidebar;