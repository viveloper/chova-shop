import { Component, renderComponent } from '../../modules/MyReact.js';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const { cart } = this.props;

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const title = document.createElement('h1');
    title.innerText = 'Shopping Cart';
    container.appendChild(title);

    // console.log(cart);

    return this.container;
  }
}

export default Cart;
