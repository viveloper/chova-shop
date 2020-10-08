import { Component, renderComponent } from '../modules/MyReact.js';
import Cart from '../components/Cart/Cart.js';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.addEventListener('input', this.handleSelect);
    this.container.addEventListener('click', this.handleClick);
  }

  handleSelect = (e) => {
    const { editCartItemQty } = this.props;

    if (e.target.classList.contains('select-cart-item-qty')) {
      const id = e.target.dataset.itemId;
      editCartItemQty(id, Number(e.target.value));
    }
  };

  handleClick = (e) => {
    const { removeCartItem, history } = this.props;

    if (e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      history.push(path);
      return;
    }

    if (e.target.classList.contains('btn-cart-item-remove')) {
      const id = e.target.dataset.itemId;
      removeCartItem(id);
    } else if (
      e.target.parentElement.classList.contains('btn-cart-item-remove')
    ) {
      const id = e.target.parentElement.dataset.itemId;
      removeCartItem(id);
    }
  };

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
      {
        cartItems: items,
        totalItems,
        totalPrice,
        history,
      },
      this.container
    );

    return this.container;
  }
}

export default CartContainer;
