import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitle from "./PageTitle.js";
import "./PlayerNews.css";

class PlayerNews extends Component {
	constructor(props){
		super(props);
		this.state = {
			news: [
				{
					desc: "Aliquam eget urna quis ante viverra pharetra. Duis a metus vel dolor viverra tincidunt vel vel risus. Morbi feugiat nunc nec mollis venenatis.",
					time: "AUG 15, 2018"
				},
				{
					desc: "Cras molestie ligula ut porta mollis. Nam eget dignissim urna, eu varius eros. Integer cursus lacus vel enim condimentum, at blandit felis feugiat.",
					time: "AUG 15, 2018"
				},
				{
					desc: "Etiam blandit tortor at nunc gravida fermentum. Curabitur fermentum et neque eget bibendum. Pellentesque non fermentum quam.",
					time: "AUG 15, 2018"
				},
				{
					desc: "Nunc magna turpis, luctus blandit ligula eu, consequat mattis nisi. Vestibulum interdum et lacus nec accumsan.",
					time: "AUG 15, 2018"
				},
			]
		}
	}
	render(){
		return (
			<div className="about-playernews">
			
				<PageTitle title="PLAYER NEWS"/>
				
				<div className="playernews-wrapper">
				
				{this.state.news.map( (item, i) => {
					return (
						<div className="playernews-single" key={i}>
							<div className="playernews-single-desc">
								<Link to="#">
									{item.desc}
								</Link>
							</div>
							<div className="playernews-single-time">
								<i className="far fa-clock"></i>
								<time>{item.time}</time>
							</div>
						</div>
					);
				})}
					
				</div>
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".playernews-single-desc a").forEach(para => {
			let text = para.innerHTML;
			let firstWord = text.slice(0, text.indexOf(" "));
			let rest = text.slice(text.indexOf(" "), text.length);
			let span = document.createElement("SPAN");
			let textNode = document.createTextNode(firstWord);
			span.appendChild(textNode);
			span.classList.add("first");
			para.innerHTML = "";
			let completeText = span + rest;
			para.appendChild(span);
			para.innerHTML += rest;
		});
	}
}

export default PlayerNews;