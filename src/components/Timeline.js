import React, { Component } from 'react';

class Timeline extends Component {
	render(){
		return (
			<div className="achievement">
				<div className="achievement-time-title">
					<time className="achievement-time">{this.props.year}</time>
					<div className="achievement-title">{this.props.title}</div>
				</div>
				<div className="achievement-text">
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default Timeline;