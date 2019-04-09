import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Details extends Component {
    
    render() {
        return(
            <div className="container py-5">
            	<div className="row">
                    <div className="col-10 mx-auto text-center text-slanted my-5">
                        <h1>Tên sản phẩm</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        {/* <img src={img} className="img-fluid" alt="product" /> */} 
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h3>Hãng: </h3>
                        <h3 className="font-weight-bold">Giá: <span>$</span></h3>
                        <h3>Thông tin về sản phẩm:</h3><p className="text-muted">Info</p>
                        <div>
                            <Link to="/san-pham">
                                <button className="btn btn-outline-success">Tiếp tục mua hàng</button>
                            </Link>
                            <button className="btn btn-outline-primary mx-3">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;