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
    this.container.innerHTML = '';

    const { cartItems, totalItems, totalPrice } = this.props;

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const title = document.createElement('h1');
    title.innerText = 'Shopping Cart';
    container.appendChild(title);

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    const cartItemsCol = document.createElement('div');
    cartItemsCol.className = 'col-md-8';
    row.appendChild(cartItemsCol);

    renderComponent(CartItems, { items: cartItems }, cartItemsCol);

    const checkoutCol = document.createElement('div');
    checkoutCol.className = 'col-md-4';
    row.appendChild(checkoutCol);

    renderComponent(CheckoutCard, { totalItems, totalPrice }, checkoutCol);

    return this.container;
  }
}

export default Cart;
