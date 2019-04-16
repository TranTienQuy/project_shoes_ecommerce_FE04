import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {ProductConsumer} from './context';

class Details extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
		this.state = {
            id,
            product: {},
		}
	}

	componentDidMount(){
        Axios.get(`http://localhost:3000/products/${this.props.match.params.id}`)
		.then(response => {
			console.log(response.data);
			this.setState({product: response.data});
		});
    }
    
    render() {
        const {product,id} = this.state;
		const productDetail =  Object.keys(product).length ? (
            <ProductConsumer>
                {value => {
                    return (<div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted my-5">
                                <h2>{product.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={require(`./${product.img}`)} className="img-fluid" alt="product" /> 
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h3>Hãng: {product.company}</h3>
                                <h3>Giá: ${product.price}</h3>
                                <h3>Thông tin sản phẩm:</h3><p>{product.info}</p>
                                <div>
                                    <Link to="/san-pham">
                                        <button className="btn btn-outline-primary text-uppercase">tiếp tục mua sắm</button>
                                    </Link>
                                    <button className="btn btn-outline-primary text-uppercase mx-3" disabled={product.inCart?true:false} onClick={() => {
                                        value.addToCart(Number(id)); product.inCart = true;}}>
                                        {product.inCart ? 'đã thêm vào giỏ hàng' : 'thêm vào giỏ hàng'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
        ) : (
			<div className="center"></div>
        )
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        {productDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;