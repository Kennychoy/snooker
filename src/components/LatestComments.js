import React, { Component } from 'react';
import PageTitle from "./PageTitle.js";
import {Link} from "react-router-dom";
import "./LatestComments.css";

class LatestComments extends Component {
	constructor(props){
		super(props);
		this.state = {
			latestcomments: [
				{
					commentor_avatar: "http://kennytesting.000webhostapp.com/snooker/img/commentor 1.jpeg",
					commentor_name: "Jonathon Sawyer",
					time: "4 HOURS AGO",
					comment_text: "Curabitur justo quam, viverra ac ullamcorper vitae, vehicula vitae eros. Sed bibendum mauris nulla, quis sodales nulla ultricies eu. Quisque egestas maximus semper. Duis a vulputate dolor, sed varius orci.",
					comment_title: "Mauris luctus feugiat tortor, et vulputate massa tristique sed."
				},
				{
					commentor_avatar: "http://kennytesting.000webhostapp.com/snooker/img/commentor 2.jpeg",
					commentor_name: "Chanel Shea",
					time: "4 HOURS AGO",
					comment_text: "Mauris quam dui, tempus pellentesque ultricies a, sagittis sit amet lacus. Etiam tincidunt velit vel turpis pretium volutpat. Cras nunc augue, placerat at malesuada eget, condimentum lacinia nibh.",
					comment_title: "Mauris hendrerit elit ipsum, vitae ullamcorper elit tincidunt eu."
				},
				{
					commentor_avatar: "http://kennytesting.000webhostapp.com/snooker/img/commentor 3.jpeg",
					commentor_name: "Grant Hutchings",
					time: "1 DAY AGO",
					comment_text: "Nunc pharetra, leo vel varius ullamcorper, urna libero dapibus sapien, aliquam consectetur neque magna id erat. Pellentesque ex erat, dictum ac luctus non, egestas a ante. Suspendisse non semper sapien.",
					comment_title: "Sed nisi nisi, egestas non lacus a, facilisis laoreet augue."
				},
				{
					commentor_avatar: "http://kennytesting.000webhostapp.com/snooker/img/commentor 4.jpeg",
					commentor_name: "Darcy Browne",
					time: "2 DAYS AGO",
					comment_text: "Donec nec sem bibendum, dignissim justo sodales, pellentesque est. Nulla gravida, lorem fermentum efficitur ultrices, velit magna volutpat massa, sit amet mattis augue turpis et magna.",
					comment_title: "Vivamus vulputate felis felis, at hendrerit dui aliquet quis."
				},
			]
		}
	}
	render(){
		return (
			<div className="latest-comments col-12">
				<PageTitle title="LATEST COMMENTS" />
				<div className="latest-comments-wrapper">
				
					{this.state.latestcomments.map( (item, i) => {
						return (
							<div className="latest-comments-single">
								<div className="commentor-misc">
									<div className="commentor-avatar">
										<img src={item.commentor_avatar} alt="" />
									</div>
									<div className="commentor-name-time">
										<div className="commentor-name">{item.commentor_name}</div>
										<div className="commentor-time">{item.time}</div>
									</div>
								</div>
								<div className="comment-text">{item.comment_text}</div>
								<div className="comment-title">
									<Link to="#">{item.comment_title}</Link>
								</div>
							</div>
						);
					})}

				</div>
			</div>
		);
	}
}

export default LatestComments;