import React, {Component} from 'react';

class CartTotals extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                            clear cart
                        </button>
                        <h5>
                            <span className="text-title">tổng tiền: </span>
                            <strong>$ </strong>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartTotals;