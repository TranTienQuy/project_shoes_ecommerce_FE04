import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Slide from './Slide';
import Footer from './Footer';
import Cart from './Cart';
import Details from './Details';

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
						<Route path="/chi-tiet" component={Details} />
					</Switch>
					<Footer/>
				</React.Fragment>
			</div>
		);
	}
}

export default Home;