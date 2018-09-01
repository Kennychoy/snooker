import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import "./GridshopSidebar.css";

import Slider from "./Slider";

class GridshopSidebar extends Component {
	render(){
		return (
			<div className="gridshop-sidebar col-xl-3 col-12">
				<div className="row">
				
					<div className="col-xl-12 col-md-6 col-12 sidebar-categories">
						<PageTitle title="CATEGORIES" />
						
						<div className="checkbox-wrapper">
							<div className="categories-checkbox">
								<div className="categories-items">
									<div className="form-check">
										<label className="form-check-label">
											<input type="checkbox" className="form-check-input" value=""/>ASH CUES
										</label>
									</div>
								</div>
								<div className="stocks">177</div>
							</div>
							
							<div className="categories-checkbox">
								<div className="categories-items">
									<div className="form-check">
										<label className="form-check-label">
											<input type="checkbox" className="form-check-input" value=""/>MAPLE CUES
										</label>
									</div>
								</div>
								<div className="stocks">189</div>
							</div>
							
							<div className="categories-checkbox">
								<div className="categories-items">
									<div className="form-check">
										<label className="form-check-label">
											<input type="checkbox" className="form-check-input" value=""/>Accessory
										</label>
									</div>
								</div>
								<div className="stocks">201</div>
							</div>
						</div>
					</div>
					
					<div className="col-xl-12 col-md-6 col-12 sidebar-price">
						<PageTitle title="PRICE" />
						<div className="price-wrapper">
							<div className="price-values">
								<input type="text" id="left-range"/>
								<span><i className="fas fa-arrows-alt-h"></i></span>
								<input type="text" id="right-range"/>
							</div>
							<div className="price-range">
								<Slider />
							</div>
						</div>
					</div>
					
					<div className="col-xl-12 col-md-6 col-12 sidebar-color">
						<PageTitle title="COLOR" />
						<div className="color-wrapper">
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
							<span className="color-sq"></span>
						</div>
					</div>
					
					<div className="col-xl-12 col-md-6 col-12 sidebar-oz">
						<PageTitle title="SELECT OZ" />
						<div className="oz-wrapper">
							<span className="oz-sq">14 oz</span>
							<span className="oz-sq">16 oz</span>
							<span className="oz-sq">18 oz</span>
							<span className="oz-sq">20 oz</span>
							<span className="oz-sq">22 oz</span>
						</div>
					</div>
					
				{ /* .row */}					
				</div>
			{/* gridshop-sidebar*/}
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".color-sq").forEach( sq => {
			sq.addEventListener("click", () => {
				document.querySelectorAll(".color-sq").forEach( sq => {
					sq.classList.remove("color-tick");
				})
				sq.classList.toggle("color-tick");
			});
		});
		
		document.querySelectorAll(".oz-sq").forEach( oz => {
			oz.addEventListener("click", () => {
				document.querySelectorAll(".oz-sq").forEach( oz => {
					oz.classList.remove("active");
				});
				oz.classList.add("active");
			});
		});
	}
}

export default GridshopSidebar;