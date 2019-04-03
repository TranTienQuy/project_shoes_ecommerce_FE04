import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import './Slide.css';
import adidas from './images/adidas.jpg';
import nike from './images/nike.jpg';
import accessories from './images/accessories.jpg';

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
					      <div className="carousel-item active">
					        <img src={adidas} className="d-block w-100" alt="..."/>
					        <div className="carousel-caption d-none d-md-block">
					          <h5>GIÀY ADIDAS</h5>
					        </div>
					      </div>
					      <div className="carousel-item">
					        <img src={nike} className="d-block w-100" alt="..."/>
					        <div className="carousel-caption d-none d-md-block">
					          <h5>GIÀY NIKE</h5>
					        </div>
					      </div>
					      <div className="carousel-item">
					        <img src={accessories} className="d-block w-100" alt="..."/>
					        <div className="carousel-caption d-none d-md-block">
					          <h5>PHỤ KIỆN</h5>
					        </div>
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