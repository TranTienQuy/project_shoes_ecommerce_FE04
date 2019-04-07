import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Slide from './Slide';
import Footer from './Footer';
import Cart from './Cart';
import ProductList from './ProductList';

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
						<Route path="/list" component={ProductList}/>
					</Switch>
					<Footer/>
				</React.Fragment>
			</div>
		);
	}
}

export default Home;