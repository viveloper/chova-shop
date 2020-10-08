import { Component, renderComponent } from '../modules/MyReact.js';
import Cart from '../components/Cart/Cart.js';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }
  render() {
    this.container.innerHTML = '';

    const { cart, history } = this.props;

    renderComponent(Cart, { cart, history }, this.container);

    return this.container;
  }
}

export default CartContainer;
