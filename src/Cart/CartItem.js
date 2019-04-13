import React, { Component } from 'react';
import './Cart.css';

class CartItem extends Component {
    render() {
        return(
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    {/* <img src={img} className="img-fluid" alt="product" height="50" width="50" /> */}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">sản phẩm : </span>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">giá : </span>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1">-</span>
                            <span className="btn btn-black mx-1"></span>
                            <span className="btn btn-black mx-1">+</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon">
                        <i className="fas fa-trash" />
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>tổng: $  </strong>
                </div>
            </div>
        );
    }
}

export default CartItem;