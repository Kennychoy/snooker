import React, { Component } from 'react';

class TableTr extends Component {
	constructor(props){
		super(props);
		this.state = {
			quantity: 1
		}
	}
	render(){
		return (
			<tr data-price={this.props.price}>
				<td data-desc="PRODUCT NAME" className="t-productName">
					<div className="picAndName">
						<img src={this.props.img} alt="" />
						<span className="productName">{this.props.name}</span>
					</div>
				</td>
				<td data-desc="PIECE(S)" className="t-pieces">{this.props.piece}</td>
				<td data-desc="WEIGHT" className="t-weight">{this.props.weight}</td>
				<td data-desc="QUANITY" className="t-quanity">
					<div className="cart-quanity">
						<button className="quanity-add" onClick={this.quantityAdd}><i className="fas fa-plus"></i></button>
						<input type="text" value={this.state.quantity} onChange={this.handleOnChange}/>
						<button className="quanity-minus" onClick={this.quantityMinus}><i className="fas fa-minus"></i></button>
					</div>
				</td>
				<td data-desc="PRICE" className="t-price">$<span className="single-price">{this.props.price * this.state.quantity}</span></td>
				<td data-desc="" className="t-bin"><i className="far fa-trash-alt"></i></td>
			</tr>
		);
	}
	quantityAdd = () => {
		this.setState({quantity: this.state.quantity + 1}, () => {this.props.calcTotal()})
	}

	quantityMinus = () => {
		if(this.state.quantity === 0){return false};
		this.setState({quantity: this.state.quantity - 1}, () => {this.props.calcTotal()})
	}
	handleOnChange = (e) => {
		if(isNaN(e.target.value)){return false};
		this.setState({quantity: e.target.value}, () => {this.props.calcTotal()});
	}
}

export default TableTr;