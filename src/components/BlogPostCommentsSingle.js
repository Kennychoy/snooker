import React, { Component } from 'react';
import "./BlogPostCommentsSingle.css";

class BlogPostCommentsSingle extends Component {
	render(){
		return (
			<div className="comment-single" data-comment={this.props.child} id={this.props.id}>
				<div className="commentor-img" data-lineheight="th">
					<img src={this.props.img} alt="" />
				</div>
				<div className="comment-body">
					<div className="comment-nameandtime">
						<div className="commentor-name">{this.props.commentor}</div>
						<div className="comment-time">{this.props.time}</div>
					</div>
					<div className="comment-text">{this.props.text}</div>
					<div className="comment-misc">
						<div className="comment-subtle">
							<i className="far fa-thumbs-up"></i>
							<div className="comment-subtle-text">{this.props.likes}</div>
						</div>
						<div className="comment-subtle">
							<i className="far fa-comment-alt"></i>
							<div className="comment-subtle-text">Reply</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogPostCommentsSingle;