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
      onCartItemQtySelect,
      onCartItemDeleteBtnClick,      
    } = this.props;
    
    renderComponent(
      CartContainer,
      { items, onCartItemQtySelect, onCartItemDeleteBtnClick, history },
      this.container
    );    

    return this.container;
  }
}

export default CartPage;
