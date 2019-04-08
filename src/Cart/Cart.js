import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return(
            <div>
	            <div className="container py-5">
	                <CartColumns />
                    <CartList />
                    <CartTotals />
	            </div>
            </div>
        );
    }
}

export default Cart;