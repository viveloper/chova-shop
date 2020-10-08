import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CartContainer from '../containers/CartContainer.js';
import queryString from '../modules/queryString.js';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, cart, editCartItemQty, removeCartItem } = this.props;

    renderComponent(Header, { history }, this.container);
    renderComponent(
      CartContainer,
      { cart, editCartItemQty, removeCartItem, history },
      this.container
    );
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default CartPage;
