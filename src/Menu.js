import React, { Component } from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import cart from './images/cart.png';
import {Link} from 'react-router-dom';

class Menu extends Component {
	render() {
		return(
			<div className="menu">
				<div id="main_menu">
					<div className="container">
						<ul className="nav nav-pills justify-content-center">
							<li className="nav-item">
							    <Link className="nav-link" to="/">TRANG CHỦ</Link>
							</li>
							<li className="nav-item">
							    <a className="nav-link" href="#">GIỚI THIỆU</a>
							</li>
							<li className="nav-item">
							    <Link className="nav-link" to="/san-pham">SẢN PHẨM</Link>
							</li>
							<li className="nav-item dropdown">
							    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
								    role="button" aria-haspopup="true" aria-expanded="false">HƯỚNG DẪN
							    </a>
							    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">ĐẶT HÀNG</a>
									<a className="dropdown-item" href="#">THANH TOÁN</a>
							    </div>
							</li>
							<li className="nav-item">
							    <a className="nav-link" href="#">LIÊN HỆ</a>
							</li>
							<li className="nav-item">
							    <Link className="nav-link" to="/gio-hang">
							    <img src={cart} alt="cart" height="20" width="20" />
							    </Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;