import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
  render () {
    return (
      <StripeProvider apiKey="pk_live_51Hh0orKL4jTADfFoxGxvDP4YnI5OET7Xy1EEEzY2H3kMeLrw0fDzOZzk4C1lgAp0J735Ry5wn6B2hhz2GzAxc1E400sooll7I2">
        <div className="example">
         <h1>React Stripe Element Ex</h1>
        <Elements>
          <CheckoutForm orderId={this.props.initializedCart.id}/>
        </Elements>
      </div>
    </StripeProvider>
    );
  }
}
export default Checkout;