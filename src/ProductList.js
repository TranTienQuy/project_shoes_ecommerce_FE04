import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount(){
		Axios.get('http://localhost:3000/products')
		.then(response => {
			console.log(response.data);
			this.setState({products: response.data.slice(0,10)});
		});
	}

	render() {
		const {products} = this.state;
		const productList = products.length ? (
			products.map(product => {
				return (
					<div className="col-9 mx-auto col-md-6 col-lg-3 my-3" key={product.id}>
						<div className="card">
							<div className="img-container p-5">
								<Link to="/chi-tiet">
									<img className="card-img-top" src={ require(`./${product.img}`)}/>
								</Link>
								<button className="cart-btn">
									<i className="fas fa-cart-plus" />
								</button>
							</div>
						</div>
						<div className="card-footer d-flex justify-content-between">
							<p className="align-self-center mb-0">{product.name}</p>
							<h5 className="text-blue font-italic mb-0">Giá:{product.price}</h5>
						</div>
					</div>
				)
			})
		) : (
			<div className="center"></div>
		)
    return (
    	<div className="container py-5">
    		<h2 className="text-center">SẢN PHẨM</h2>
    		<div className="container">
    			<div className="row">
    				{productList}
    			</div>
    		</div>
    	</div>
    );
  }
}

export default ProductList;

		//			<h4>{this.props.name}</h4>
	    // 			<img height={100}/>
	    // 			<h4>Price:$</h4>
	    // 			<button className="btn btn-primary">Add to cart</button>
	     		// 	<h4>{this.props.name}</h4>
	    			// <img height={100}/>
	    			// <h4>Price:$</h4>
	    			// <button className="btn btn-primary">Add to cart</button>
	    			// <div id="product-item" className="item col-xs-4 col-lg-4">
	    			// </div>