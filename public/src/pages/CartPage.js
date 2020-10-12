import { Component, renderComponent } from '../modules/MyReact.js';
import CartContainer from '../containers/CartContainer.js';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const {
      history,      
      items,
      editCartItemQty,
      removeCartItem,      
    } = this.props;
    
    renderComponent(
      CartContainer,
      { items, editCartItemQty, removeCartItem, history },
      this.container
    );    

    return this.container;
  }
}

export default CartPage;
