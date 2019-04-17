import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import logo from './images/logo.png';
import search from './images/search-icon.png';
import './Header.css';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class Header extends Component {
	render() {
		return(
			<div className="header">
				<div className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<p>Mọi thông tin xin liên hệ về email: <a href="#">question@gmail.com</a> </p>
						<p className="float-right">Chào mừng, nếu bạn có tài khoản làm ơn 
						<a href="#" data-toggle="modal" data-target="#exampleModal"> đăng nhập</a>, 
						hoặc <Link to="/dang-ky"> đăng ký </Link> nếu chưa có tài khoản </p>
						<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" 
						aria-labelledby="exampleModalLabel" 
						aria-hidden="true">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						     	<div>
							      	<p>Tài khoản:</p>
							      	<input type="text" id="frmLogin" placeholder="Mời bạn nhập user name..."/>
							    </div>
							    <div>
							      	<p>Mật khẩu:</p>
							        <input type="text" id="frmPass" placeholder="Mời bạn nhập mật khẩu..."/>
							    </div>
						      </div>
						      <div className="modal-footer">
						        <button type="button" className="btn btn-secondary">Nhập lại</button>
						        <button type="button" className="btn btn-primary">Đăng nhập</button>
						      </div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
				<div className="main_header container">
					<Link to="/">
						<img id="logo" src={logo} height="100" width="100" />
					</Link>
					<div className="form-inline float-right">
						<input type="text" className="form-control" name="search" id="search" placeholder="Tìm kiếm..."/>
						<button className="btn btn-primary"><FontAwesomeIcon icon="search" /></button>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;