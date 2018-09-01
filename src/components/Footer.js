import React, { Component } from 'react';
import {Link} from "react-router-dom";

import TopFooter from "./TopFooter.js";
import MiddleFooter from "./MiddleFooter.js";
import BottomFooter from "./BottomFooter.js";
import "./Footer.css";

class Footer extends Component {
	render(){
		return (
			<footer>
				<TopFooter />
				<MiddleFooter />
				<BottomFooter />
			</footer>
		);
	}
}

export default Footer;