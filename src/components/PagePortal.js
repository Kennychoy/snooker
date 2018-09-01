import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Container, Breadcrumb, BreadcrumbItem} from "reactstrap";
import "./PagePortal.css";

class PagePortal extends Component {
	constructor(props){
		super(props);
		this.state = {
			breadcrumb: []
		}
	}
	modifyHeadline = (str) => {
		let indexArr = [];
		for(let i=0; i<str.length; i++){
			if(str[i] == "/"){
				indexArr.push(i);
			}
		};
		str = str.slice(indexArr[indexArr.length-1], str.length);
		str = str.replace("-", " ");
		str = str.replace("/", "");
		return str.toUpperCase();
	}
	modifyPath = (str) => {
		let indexArr = [];
		for(let i=0; i<str.length; i++){
			if(str[i] === "/"){
				indexArr.push(i);
			}
		}
		let itemArr = [];
		for(let j=0; j<indexArr.length; j++){			
			if(j+1 == "undefined"){
				j == str.length;
			}
			itemArr[j] = str.substr(indexArr[j], indexArr[j+1]);			
		}
		this.setState({breadcrumb: itemArr});
	}
	render(){
		return (
			<div className="page-portal">
				<Container fluid className="text-center">
					<div className="page-desc">
						<div className="page-location">
							<h1>{this.modifyHeadline(this.props.pagename)}</h1>
						</div>
						<div className="page-path">
							<Breadcrumb>
								<BreadcrumbItem>
									<Link to="/">HOME</Link>
								</BreadcrumbItem>
								{this.state.breadcrumb.map((item, i) => {
									return (
										<BreadcrumbItem key={i}>
											{item.toUpperCase().replace("/", "").replace("-", " ")}
										</BreadcrumbItem>
									);
								})}
							</Breadcrumb>
						</div>
					</div>
				</Container>
			</div>
		);
	}
	componentDidMount(){
		this.modifyPath(this.props.pathname);
	}
}

export default PagePortal;