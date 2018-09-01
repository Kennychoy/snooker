import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";
import "./NewsAndPublications.css";

export default class NewsAndPublications extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
			newnews: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 1.jpg",
					title: "Maecenas tempor lorem sed",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 2.jpg",
					title: "Donec ullamcorper mattis enim",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 3.jpg",
					title: "vel fermentum velit dignissim sit",
					date: "JULY 31, 2018"
				}
			],
			trendingnews: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 4.jpg",
					title: "Aliquam ultrices efficitur posuere",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 5.jpg",
					title: "Nullam porta diam vestibulum diamd",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 6.jpg",
					title: "Aenean id lobortis purusd",
					date: "JULY 31, 2018"
				}
			],
			popularnews: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 7.jpg",
					title: "In vitae lacus non nibh feugiat",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 8.jpg",
					title: "placerat lorem vitae, aliquet arcu",
					date: "JULY 31, 2018"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/publication 9.jpg",
					title: "Proin condimentum quam ac urna",
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
			<div className="newsAndPublications col-12">
			
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