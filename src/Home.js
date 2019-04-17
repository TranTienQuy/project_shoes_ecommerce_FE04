import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Menu from './Menu';
import Slide from './Slide';
import Footer from './Footer';
import Cart from './Cart/Cart';
import Details from './Details';
import ProductList from './ProductList';
import Register from './FrmRegister';

class Home extends Component {
	render() {
		return(
			<div>
				<React.Fragment>
					<Header/>
					<Menu/>
					<Switch>
						<Route exact path="/" component={Slide} />
						<Route path="/gio-hang" component={Cart} />
						<Route path="/chi-tiet/:id" component={Details} />
						<Route path="/san-pham" component={ProductList}/>
						<Route path="/dang-ky" component={Register}/>
					</Switch>
					<Footer/>
				</React.Fragment>
			</div>
		);
	}
}

export default Home;