import { Component, renderComponent } from '../../modules/MyReact.js';
import CartItems from './CartItems.js';
import CheckoutCard from './CheckoutCard.js';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    const { cartItems, totalItems, totalPrice } = this.props;

    this.container.innerHTML = `
      <div class="container">
        <h1>Shopping Cart</h1>
        <div class="row">          
          <div class="col-md-8">            
            ${renderComponent(CartItems, { items: cartItems }, null, 'HTML')}
          </div>
          <div class="col-md-4">
            ${renderComponent(
              CheckoutCard,
              { totalItems, totalPrice },
              null,
              'HTML'
            )}
          </div>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default Cart;
