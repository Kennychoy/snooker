import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
			newnews: [
				{
					img: "./img/publication 1.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 2.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 3.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				}
			],
			trendingnews: [
				{
					img: "./img/publication 4.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 5.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 6.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				}
			],
			popularnews: [
				{
					img: "./img/publication 7.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 8.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "./img/publication 9.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				}
			]
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	
	render() {
		return (
			<div className="newsAndPublications">
			
				<div className="homepage-titles follow-us-title">								
					<h5>News And Publications</h5>								
				</div>
	  
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => { this.toggle('1'); }}
						>
							NEW
						</NavLink>
					</NavItem>
					
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => { this.toggle('2'); }}
						>
							TRENDING
						</NavLink>
					</NavItem>
					
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => { this.toggle('3'); }}
						>
							POPULAR
						</NavLink>
					</NavItem>
				</Nav>
		
				<TabContent activeTab={this.state.activeTab}>
		
			<TabPane tabId="1">
				<Row>					
					{this.state.newnews.map( (item, i) => {
						return (
							<Col sm="12" key={i}>
								<div className="publication-inner">
									<div className="publication-img">
										<img src={item.img} alt="" className="img-responsive" />
									</div>
									<div className="publication-content">
										<div className="publication-content-title">
											<Link to="#">{item.title}</Link>
										</div>
										<div className="publication-content-time">
											<i className="far fa-clock"></i>
											<time>{item.date}</time>
										</div>
									</div>
								</div>
							</Col>
						);
					})}					
				</Row>
			</TabPane>
			
			<TabPane tabId="2">
				<Row>
					{this.state.trendingnews.map( (item, i) => {
						return (
							<Col sm="12" key={i}>
								<div className="publication-inner">
									<div className="publication-img">
										<img src={item.img} alt="" className="img-responsive" />
									</div>
									<div className="publication-content">
										<div className="publication-content-title">
											<Link to="#">{item.title}</Link>
										</div>
										<div className="publication-content-time">
											<i className="far fa-clock"></i>
											<time>{item.date}</time>
										</div>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</TabPane>
	
			<TabPane tabId="3">
				<Row>
					{this.state.popularnews.map( (item, i) => {
						return (
							<Col sm="12" key={i}>
								<div className="publication-inner">
									<div className="publication-img">
										<img src={item.img} alt="" className="img-responsive" />
									</div>
									<div className="publication-content">
										<div className="publication-content-title">
											<Link to="#">{item.title}</Link>
										</div>
										<div className="publication-content-time">
											<i className="far fa-clock"></i>
											<time>{item.date}</time>
										</div>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</TabPane>

        </TabContent>
      </div>
    );
  }
}