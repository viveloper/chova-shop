import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Product from '../components/Product.js';
import { fetchProduct } from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await fetchProduct(productId);
    if (!isError) {
      asyncHandler.setData.call(this, 'product', data);
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.state;
    const { history, addCartItem } = this.props;

    renderComponent(Product, { product, addCartItem, history }, this.container);

    return this.container;
  }
}

export default ProductContainer;
