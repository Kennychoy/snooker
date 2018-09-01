import React, { Component } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";


class Slider extends Component {	
	render(){		
		return (
			<Nouislider 
				range={{ min: 0, max: 500 }} 
				start={[20, 400]} 
				step={5}
				connect
				onUpdate={this.handleOnUpdate}
			/>
			);
	}
	handleOnUpdate = () => {
		let rightThumb = document.querySelector(".noUi-handle-upper");
		let leftThumb = document.querySelector(".noUi-handle-lower");		
		document.querySelector("#left-range").setAttribute("value", "$"+(leftThumb.getAttribute("aria-valuenow") / 100) * 500);
		document.querySelector("#right-range").setAttribute("value", "$"+(rightThumb.getAttribute("aria-valuenow") / 100) * 500);
	}
}

export default Slider;