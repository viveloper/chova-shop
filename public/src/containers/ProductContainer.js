import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Product from '../components/Product.js';
import { fetchProduct } from '../api/products.js';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        loading: false,
        data: null,
        error: null,
      },
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    this.setLoading('product');
    const { isError, data } = await fetchProduct(productId);
    if (!isError) {
      this.setData('product', data);
    } else {
      this.setError('product', data);
    }
  }

  setLoading(key) {
    this.setState({
      [key]: {
        loading: true,
        data: null,
        error: null,
      },
    });
  }

  setError(key, error) {
    this.setState({
      [key]: {
        loading: false,
        data: null,
        error,
      },
    });
  }

  setData(key, data) {
    this.setState({
      [key]: {
        loading: false,
        data,
        error: null,
      },
    });
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.state;
    const { history } = this.props;

    renderComponent(Product, { product, history }, this.container);

    return this.container;
  }
}

export default ProductContainer;
