import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import BlogPost from "./components/BlogPost";
import GridShop from "./components/GridShop";
import ProductSingle from "./components/ProductSingle";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AwardsCarousel from "./components/AwardsCarousel";

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

class App extends Component {
	render() {
		return (
			<Router basename="/snooker">
				<div className="App">
					<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about-us" component={AboutUs} />
							<Route path="/news" exact component={News} />
							<Route path="/news/blog-post" component={BlogPost} />
							<Route path="/shop" exact component={GridShop} />
							<Route path="/shop/product-page" component={ProductSingle} />
							<Route path="/shop/shopping-cart" component={ShoppingCart} />
							<Route path="/shop/checkout" component={Checkout} />
							<Route path="/contact" component={Contact} />
							<Route path="/AwardsCarousel" component={AwardsCarousel} />
						</Switch>
					<Footer />
				</div>
			</Router>
		);
	}	
}

export default App;
