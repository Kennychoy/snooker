import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import { Table } from 'reactstrap';
import "./ShoppingCart.css";
import TableTr from "./TableTr";

class ShoppingCart extends Component {
	constructor(props){
		super(props);
		this.state = {
			cart: [
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/product-single-carousel 1.jpg",
					name: "John Parris",
					piece: "3/4",
					weight: "18oz",
					price: "250"
				},
				{
					img: "http://kennytesting.000webhostapp.com/snooker/img/product-single-carousel 2.jpg",
					name: "Stamford",
					piece: "1/2",
					weight: "22oz",
					price: "320"
				}
			],
			total: 0
		}
	}
	render(){
		return (
			<div className="shopping-cart">				
				<div className="container">
					<PageTitle title="YOUR SHOPPING CART" />
					<Table>
						<thead>
							<tr>
								<td>PRODUCT NAME</td>
								<td>PIECE(S)</td>
								<td>WEIGHT</td>
								<td>QUANITY</td>
								<td>PRICE</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{this.state.cart.map( (item, i) => {
								return (
									<TableTr 
										img={item.img} 
										name={item.name} 
										piece={item.piece} 
										weight={item.weight} 
										price={item.price} 
										key={i} 
										calcTotal={this.calcTotal}
									/>
								);
							})}
						</tbody>
					</Table>
					
					<div className="cart-footer">
						<div className="total-text">TOTAL</div>
						<div className="total-price">$<span className="calc-total">{this.state.total}</span></div>
						<button className="go-checkout">PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</div>
		);
	}
	calcTotal = () => {
		let trs = document.querySelectorAll("tbody tr");
		let tempTotal = 0;
		for(let i=0; i<trs.length; i++){			
			tempTotal += Number(trs[i].querySelector("input").getAttribute("value")) * Number(trs[i].getAttribute("data-price"));
		}
		this.setState({total: tempTotal}, this.forwardTotal(tempTotal));
	}	
	forwardTotal = (amount) => {
		if(document.querySelector(".cartTotal-amount") && document.querySelector(".cartSubTotal-amount")){
			document.querySelector(".cartTotal-amount").innerText = amount;
			document.querySelector(".cartSubTotal-amount").innerText = amount;
		}		
	}
	componentDidMount(){
		this.calcTotal();
	}
}

export default ShoppingCart;