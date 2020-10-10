import { Component, renderComponent } from '../modules/MyReact.js';
import ProductContainer from '../containers/ProductContainer.js';

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, addCartItem } = this.props;
    const productId = this.props.match.params.id;
    
    renderComponent(
      ProductContainer,
      {
        history,
        productId,
        addCartItem,
      },
      this.container
    );    

    return this.container;
  }
}

export default ProductDetailPage;
