import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import './Slide.css';
import main from './images/main.jpg';
import canon from './images/canon.png';
import nikon from './images/nikon.png';

class Slide extends Component {
	render() {
		return(
			<div id="slide_show">
				<div className="container">
					<div className="bd-example">
					  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					    <ol className="carousel-indicators">
					      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
					      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					    </ol>
					    <div className="carousel-inner">
								<div className="carousel-item">
					        <img src={canon} className="d-block w-100" alt="..."/>
					      </div>
								<div className="carousel-item">
					        <img src={nikon} className="d-block w-100" alt="..."/>
					      </div>
					      <div className="carousel-item active">
					        <img src={main} className="d-block w-100" alt="..."/>
					      </div>
					    </div>
					    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					      <span className="sr-only">Previous</span>
					    </a>
					    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					      <span className="carousel-control-next-icon" aria-hidden="true"></span>
					      <span className="sr-only">Next</span>
					    </a>
					  </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slide;