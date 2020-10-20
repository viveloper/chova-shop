import { Component, renderComponent } from '../modules/MyReact.js';
import ProductContainer from '../containers/ProductContainer.js';

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { user, history, onAddBtnClick } = this.props;
    const productId = this.props.match.params.id;
    
    renderComponent(
      ProductContainer,
      {
        user,
        history,
        productId,
        onAddBtnClick,
      },
      this.container
    );    

    return this.container;
  }
}

export default ProductDetailPage;
