import React, { Component } from 'react';
import PageTitle from "./PageTitle";
import ShoppingCart from "./ShoppingCart";
import "./Checkout.css";

class Checkout extends Component {
	render(){
		return (
			<div className="checkout">
				<div className="billingAndDelivery">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-12 form-body billing-address">
								<PageTitle title="BILLING ADDRESS" />
								<form>
									<fieldset>
										<input type="text" placeholder="First Name" className="col-md-6 col-12" name="first_name"/>
										<input type="text" placeholder="Family Name" className="col-md-6 col-12" name="family_name"/>
										<input type="text" placeholder="Company" className="col-12" name="company"/>
										<input type="text" placeholder="Address" className="col-12" name="address"/>
										<input type="text" placeholder="Country" className="col-md-6 col-12" name="country"/>
										<input type="text" placeholder="City / Town" className="col-md-6 col-12" name="city_town"/>
										<input type="text" placeholder="Apartment / Suite No." className="col-md-6 col-12" name="apartment"/>
										<input type="text" placeholder="Phone" className="col-md-6 col-12" name="phone"/>
									</fieldset>
								</form>
							</div>

							<div className="col-lg-6 col-12 form-body delivery-address">
								<PageTitle title="DELIVERY ADDRESS" />
								<form>
									<fieldset>
										<input type="text" placeholder="First Name" className="col-md-6 col-12" name="first_name"/>
										<input type="text" placeholder="Family Name" className="col-md-6 col-12" name="family_name"/>
										<input type="text" placeholder="Company" className="col-12" name="company"/>
										<input type="text" placeholder="Address" className="col-12" name="address"/>
										<input type="text" placeholder="Country" className="col-md-6 col-12" name="country"/>
										<input type="text" placeholder="City / Town" className="col-md-6 col-12" name="city_town"/>
										<input type="text" placeholder="Apartment / Suite No." className="col-md-6 col-12" name="apartment"/>
										<input type="text" placeholder="Phone" className="col-md-6 col-12" name="phone"/>
									</fieldset>
								</form>
							</div>
							
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />My Billing Address And Shipping Address are The Same
								</label>
							</div>
							
						{ /* .row */ }	
						</div>
					{/* .container */}
					</div>
				{/* .billingAndDelivery */}
				</div>
				
				<ShoppingCart />
				
				<div className="paymentAndCartTotal">
					<div className="container">
						<div className="row">
						
							<div className="col-md-6 col-12 payment-method">
								<PageTitle title="PAYMENT METHODS" />
								<div className="payment-container">
									<div className="payment-wrapper">
									<div className="custom-checkbox">
										<span><i className="fas fa-check"></i></span>
										<label>DIRECT BANK TRANSFER</label>
									</div>										
									<div className="checkbox-hidden">Make your payment directly to our bank account. Please use your Order ID as the payment reference. Contact support for more information.</div>
									</div>
									<div className="payment-wrapper">
									<div className="custom-checkbox">
										<span><i className="fas fa-check"></i></span>
										<label>PAYPAL</label>
									</div>	
										<div className="checkbox-hidden">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</div>
									</div>
									<div className="payment-wrapper">
									<div className="custom-checkbox">
										<span><i className="fas fa-check"></i></span>
										<label>CHEQUE PAYMENT</label>
									</div>	
										<div className="checkbox-hidden">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
									</div>	
								</div>															
							</div>
							
							<div className="col-md-6 col-12 cart-total">
								<PageTitle title="CART TOTAL" />
								<div className="cartTotal-container">
									<div className="cartTotal-item">
										<div className="cartTotal-item-desc">CART SUBTOTAL</div>
										<div className="cartTotal-item-amount cartSubTotal-amount">$570</div>
									</div>
									<div className="cartTotal-item">
										<div className="cartTotal-item-desc">SHIPPING</div>
										<div className="cartTotal-item-amount">FREE</div>
									</div>
									<div className="cartTotal-item">
										<div className="cartTotal-item-desc">TOTAL</div>
										<div className="cartTotal-item-amount cartTotal-amount">$570</div>
									</div>
								</div>
							</div>
						{/* .row */}
						</div>
					{/* .container */}
					</div>
				{/* .paymentAndCartTotal */}
				</div>
				
				<div className="checkout-btn">
					<button>CHECKOUT</button>
				</div>
				
			{ /* .checkout */ }	
			</div>
		);
	}
	componentDidMount(){
		document.querySelectorAll(".payment-wrapper").forEach( wrapper => {
			wrapper.addEventListener("click", () => {
				if(wrapper.classList.contains("active")){
					wrapper.classList.remove("active");
				} else {
					document.querySelectorAll(".payment-wrapper").forEach( wrapper => {
						wrapper.classList.remove("active");
					})
					wrapper.classList.toggle("active");
				}
			});
		});
	}
}

export default Checkout;