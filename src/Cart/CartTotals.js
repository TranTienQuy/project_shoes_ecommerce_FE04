import React from 'react';
import {Link} from 'react-router-dom';

function CartTotals ({value}) {
    const {cartTotal, clearCart} = value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/san-pham">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button" onClick={() => clearCart()} >
                                dọn sạch giỏ hàng
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">TỔNG TIỀN: </span>
                            <strong> ${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTotals;