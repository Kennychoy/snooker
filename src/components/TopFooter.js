import React, { Component } from 'react';

class TopFooter extends Component {
	render(){
		return (
			<div className="top-footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-12 our-sponsors">
							<h5>OUR SPONSORS</h5>
						</div>
						<div className="col-lg-2 col-md-2 col-4 offset-lg-0 offset-md-1 sponsors-logos">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/html_white.png" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-4 sponsors-logos">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/javascript_white.png" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-4 sponsors-logos">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/react_white.png" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 offset-md-0 offset-2 col-4 sponsors-logos">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/bootstrap_white.png" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-4 sponsors-logos">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/sass_white.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TopFooter;