import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import PagePortal from "./PagePortal";
import BlogPostSingle from "./BlogPostSingle";
import BlogPostCarousel from "./BlogPostCarousel";
import BlogPostComments from "./BlogPostComments.js";

import Sidebar from "./Sidebar";
import HotNews from "./HotNews";
import NewsAndPublications from "./NewsAndPublications";
import AboutFollowUs from "./AboutFollowUs";
import LatestComments from "./LatestComments";
import SidebarSubscribe from "./SidebarSubscribe";
import SidebarTags from "./SidebarTags";

import "./BlogPost.css";

class BlogPost extends Component {
	constructor(props){
		super(props);
		this.state = {
			sidebarcontent: [
				<HotNews />,
				<NewsAndPublications />,
				<AboutFollowUs />,
				<LatestComments />,
				<SidebarSubscribe />,
				<SidebarTags />
			]
		}
	}
	render(){
		return (
			<div className="blogpost">
				<PagePortal pagename={this.props.location.pathname} pathname={this.props.match.url}/>
				<Container>
					<Row>
						<Col className="blogpost-wrapper" lg="8" xs="12">
							<BlogPostSingle />
							<BlogPostCarousel />
							<BlogPostComments />
						</Col>
						<Sidebar sidebarcontent={this.state.sidebarcontent} />
						<Col className="blogpost-sidebar" lg="4" xs="12">
							
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default BlogPost;