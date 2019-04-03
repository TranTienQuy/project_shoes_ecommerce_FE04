import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Footer.css';
import $ from "jquery";
import fb_brand from './images/fb-brand.png';
import twt_brand from './images/twt-brand.png';
import gplus_brand from './images/gplus-brand.png';

class Footer extends Component {
	render() {
		return(
			<div className="footer">
				<div className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
					<p><a href="#">Sport Shoes</a> Template <span>|</span> copyright &copy; 2019</p>
					<ul className="social-links">
						<li className="fb float-left"><a href="#"></a></li>
						<li className="twt float-left"><a href="#"></a></li>
						<li className="gplus float-right"><a href="#"></a></li>
					</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;