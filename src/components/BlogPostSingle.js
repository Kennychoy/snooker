import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./BlogPostSingle.css";

class BlogPostSingle extends Component {
	render(){
		return (
			<div className="blogpost-single">
				<h4 className="blogpost-cat">
					<span className="badge badge-danger">New</span>
				</h4>
				<h1 className="blogpost-title">Nunc ac lorem eget est sollicitudin ullamcorper eu sed erat</h1>
				
				<div className="blogpost-misc">
					<div className="blogpost-writer">
						<div className="blogpost-img">
							<img src="http://kennytesting.000webhostapp.com/snooker/img/author 1.jpeg" alt="" />
						</div>
						<div className="blogpost-author">Author's Name</div>
					</div>
					<div className="blogpost-subtle">
						<div className="subtle-misc">
							<i className="far fa-clock"></i>
							<div className="subtle-text">AUG 19, 2018</div>
						</div>
						<div className="subtle-misc">
							<i className="far fa-comment-alt"></i>
							<div className="subtle-text">345</div>
						</div>
						<div className="subtle-misc">
							<i className="far fa-eye"></i>
							<div className="subtle-text">401</div>
						</div>
					</div>
				</div>
				
				<div className="blogpost-intro">
					Ut sollicitudin orci id nunc vestibulum blandit. Praesent faucibus diam vel augue egestas viverra. Suspendisse fringilla, tortor in iaculis vulputate, sem neque bibendum orci, vel vulputate mauris magna sagittis urna. Phasellus et nibh ut purus tristique rutrum vel et eros. Suspendisse eget nibh convallis, porttitor ipsum eget.
				</div>
				
				<div className="blogpost-share">
					<div className="blogpost-share-text">SHARE THIS POST</div>
					<ul>
						<li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
						<li><Link to=""><i className="fab fa-twitter"></i></Link></li>
						<li><Link to=""><i className="fab fa-google-plus-g"></i></Link></li>
						<li><Link to=""><i className="fab fa-instagram"></i></Link></li>
					</ul>
				</div>
				
				<div className="blogpost-content">
					<p>Nullam in ullamcorper velit. Nullam tincidunt eleifend neque, ac tincidunt mi accumsan vitae. Nunc ac lorem eget est sollicitudin ullamcorper eu sed erat. Praesent scelerisque sem et sapien convallis, ut bibendum odio mattis. Cras quis erat iaculis, ultricies ipsum vel, luctus elit. Vestibulum vel quam auctor massa sollicitudin gravida. Morbi quis diam id enim accumsan tristique.</p>
					<p>In eget ex in turpis vestibulum malesuada. Fusce mi urna, scelerisque in interdum vitae, mattis ac turpis. Duis rutrum fringilla augue nec suscipit. In condimentum suscipit lacus, in iaculis nunc pellentesque vitae. Praesent hendrerit nulla augue, at suscipit orci tempor a.</p>
					<div className="blogpost-photo">
						<img src="../img/newspage 1.jpg" alt="" />
					</div>
					<p>Maecenas nec ex vestibulum, accumsan nibh sed, aliquam ipsum. Duis pretium, diam ut semper dignissim, eros mauris dapibus mi, eget porttitor mauris dolor eu odio. Suspendisse imperdiet neque eu elit blandit maximus.</p>
					<div className="blogpost-quote">Nam neque ligula, tempus non rhoncus a, interdum ac sapien.</div>
					<p>Nulla accumsan leo ac mi egestas laoreet. Etiam id hendrerit nunc, et placerat turpis. Integer vehicula venenatis pellentesque. Pellentesque mollis velit at nisl lobortis accumsan. Nullam non felis eros.</p>
				</div>
				

			{/* .blogpost-single*/}	
			</div>
		);
	}
}

export default BlogPostSingle;