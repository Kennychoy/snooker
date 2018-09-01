import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./ProductBtns.css";

class ProductBtns extends Component {
	render(){
		return (
			<div className="product-btns">
				<div className="product-addToCart">
					<button>ADD TO CART</button>
				</div>
				<div className="product-share-wrapper">
					<div className="stack-share">
							<i className="fas fa-share-alt"></i>																	
					</div>
					<div className="product-expand-share">
						<ul>
							<li>SHARE</li>
							<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
							<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
							<li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
							<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
						</ul>
					</div>
				</div>	
			</div>
		);
	}
}

export default ProductBtns;