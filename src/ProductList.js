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
					<div className="item col-xs-4 col-lg-4" key={product.id}>
						<Link to="/chi-tiet">
							<img src={product.img}/>
						</Link>
						<h4>Price:{product.price}</h4>
	    				<button className="btn btn-outline-primary">Add to cart</button>
					</div>
				)
			})
		) : (
			<div className="center"></div>
		)
    return (
    	<div className="container py-5">
    		<h2>Sản Phẩm</h2>
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