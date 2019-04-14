import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import emptycart from '../images/empty-cart.png';

class EmptyCart extends Component {
    render() {
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <img src={emptycart} alt="emptycart" />
                        <h6>Không có sản phẩm nào trong giỏ hàng của bạn.</h6>
                        <Link to="/san-pham">
                            <button className="btn btn-outline-primary text-uppercase mb-3 px-5" 
                            type="button">
                                tiếp tục mua sắm
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmptyCart;