import React, {Component} from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        return(
            <div className="container">
                <CartItem />
            </div>
        )
    }
}

export default CartList;