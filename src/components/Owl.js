import React, { Component } from 'react';
import $ from 'jquery'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import {owlCarousel} from "owl-carousel";

class Owl extends Component {
	render(){
		return (
			<div className="owl-carousel owl-theme">
				<div className="item"><h4>1</h4></div>
				<div className="item"><h4>2</h4></div>
				<div className="item"><h4>3</h4></div>
				<div className="item"><h4>4</h4></div>
				<div className="item"><h4>5</h4></div>
				<div className="item"><h4>6</h4></div>
				<div className="item"><h4>7</h4></div>
				<div className="item"><h4>8</h4></div>
				<div className="item"><h4>9</h4></div>
				<div className="item"><h4>10</h4></div>
				<div className="item"><h4>11</h4></div>
				<div className="item"><h4>12</h4></div>
			</div>
		);
	}
	componentDidMount(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})
	}
}

export default Owl;