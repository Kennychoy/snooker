import React, { Component } from 'react';
import "./BlogPostComments.css";
import PageTitle from "./PageTitle";
import BlogPostCommentsSingle from "./BlogPostCommentsSingle";

class BlogPostComments extends Component {
	constructor(props){
		super(props);
		this.state = {
			comments: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/commentor 1.jpeg",
					commentor: "Bear Graham",
					time: "2 days ago",
					text: "Nunc quis lacinia quam. Vestibulum suscipit feugiat elementum. Curabitur nec libero convallis tortor condimentum gravida. Aenean laoreet lobortis eros sed commodo. Integer a tellus nunc. Phasellus semper nec risus a congue. Donec nec augue velit. Proin rutrum non quam a dignissim. Duis quam tellus, blandit vel turpis in, tempor malesuada purus.",
					likes: "266",
					child: false
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/commentor 2.jpeg",
					commentor: "Willow Heaton",
					time: "2 days ago",
					text: "Suspendisse porttitor ligula et velit placerat posuere. Sed dapibus dolor nibh, vel mattis neque volutpat quis. Nunc sed risus facilisis, facilisis ex quis, rutrum purus. Aenean in mi eget leo rutrum cursus eu id ante. Donec vel odio convallis, porttitor augue non, tincidunt ante. Aliquam et bibendum diam, et vestibulum lorem.",
					likes: "236",
					child: true
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/commentor 3.jpeg",
					commentor: "Mira Weeks",
					time: "3 days ago",
					text: "Cras malesuada turpis sed sollicitudin imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at faucibus ex. Ut est tortor, vestibulum vitae varius id, finibus ut lorem. Aliquam vestibulum urna sit amet arcu lacinia blandit. Integer vitae risus porta, elementum urna quis, mollis ex.",
					likes: "306",
					child: false
				}
			]
		}
	}
	render(){
		return (
			<div className="blogpost-comments">
				<PageTitle title="3 COMMENTS" />
				<div className="blogpost-comments-inner">
					{this.state.comments.map( (item, i) => {
						return (
							<BlogPostCommentsSingle 
								img={item.img} 
								commentor={item.commentor} 
								time={item.time} 
								text={item.text} 
								likes={item.likes}
								key={i}
								child={item.child}
								id={'comment'+i}
							/>
						);
					})}					
				</div>
				<div className="blogpost-comment-input">
					<div className="commentor-avatar">
						<img src="../img/commentor 4.jpeg" alt="" />
					</div>
					<div className="commentor-nameAndBox">
						<div className="commentor-name">Wil Mansell</div>
						<div className="commentor-box form-group">
							<textarea className="form-control" rows="5" placeholder="Your comment"></textarea>
						</div>
						<button type="submit">SUBMIT</button>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".comment-single").forEach( comment => {
			comment.getAttribute("data-comment") == "true" ? this.addChildClass(comment) : void(0);
		});
	}
	addChildClass = (comment) => {
		comment.classList.add("comment-child");
		{/*
		(()=>{
			let parentImg = comment.previousElementSibling.querySelector(".commentor-img");
			let parentImgPosY = parentImg.getBoundingClientRect().top + window.pageYOffset;
			let parentImgPosX = parentImg.getBoundingClientRect().left + window.pageXOffset;
			let childImgPosY = comment.querySelector(".commentor-img").getBoundingClientRect().top + window.pageYOffset;
			let childImgPosX = comment.querySelector(".commentor-img").getBoundingClientRect().left + window.pageXOffset;
			let distanceY = childImgPosY - parentImgPosY;
			let distanceX = childImgPosX - parentImgPosX;
			let style = document.createElement("STYLE");
			style.id = "extraCSS" + comment.id;
			document.querySelector("head").appendChild(style);
			let sheet = style.sheet;
			let selector = comment.getAttribute("id");
			sheet.insertRule(`#${selector} .commentor-img:after {width: ${distanceX / 2}px;}`, 0);
			sheet.insertRule(`#${selector} .commentor-img:before {height: ${distanceY * .7}px;}`, 0);
		})();
		*/}
	}
}

export default BlogPostComments;