import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
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

    renderComponent(Header, { history }, this.container);
    renderComponent(
      ProductContainer,
      {
        history,
        productId,
        addCartItem,
      },
      this.container
    );
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default ProductDetailPage;
