import { Component, renderComponent } from '../modules/MyReact.js';
import Cart from '../components/Cart/Cart.js';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }
  render() {
    this.container.innerHTML = '';

    const {
      cart: { items },
      history,
    } = this.props;

    const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );

    renderComponent(
      Cart,
      { cartItems: items, totalItems, totalPrice, history },
      this.container
    );

    return this.container;
  }
}

export default CartContainer;
