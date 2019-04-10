import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Details extends Component {
    constructor(props) {
		super(props);
		this.state = {
			productDetails: [],
		}
	}

	componentDidMount(){
		Axios.get('http://localhost:3000/productDetails')
		.then(response => {
			console.log(response.data);
			this.setState({productDetails: response.data.slice(0,10)});
		});
    }
    
    render() {
        const {productDetails} = this.state;
		const productDetail = productDetails.length ? (
            productDetails.map(productDetail => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted my-5">
                                <h2>{productDetail.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={require(`./${productDetail.img}`)} className="img-fluid" alt="product" /> 
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h3>Hãng: {productDetail.company}</h3>
                                <h3 className="font-weight-bold">Giá: {productDetail.price}</h3>
                                <h3>Thông tin về sản phẩm:</h3><p className="text-muted">{productDetail.info}</p>
                                <div>
                                    <Link to="/san-pham">
                                        <button className="btn btn-outline-success">Tiếp tục mua hàng</button>
                                    </Link>
                                    <button className="btn btn-outline-primary mx-3">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
			<div className="center"></div>
        )
        return (
            <div className="container py-3">
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