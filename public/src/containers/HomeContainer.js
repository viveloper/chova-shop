import { Component, renderComponent } from '../modules/MyReact.js';
import Home from '../components/Home.js';
import { fetchProducts } from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    asyncHandler.setLoading.call(this, 'products');
    const { isError, data } = await fetchProducts();
    if (!isError) {
      asyncHandler.setData.call(this, 'products', data.products);
    } else {
      this.setError('products', data);
      asyncHandler.setError.call(this, 'products', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { products } = this.state;
    const { history } = this.props;

    renderComponent(Home, { products, history }, this.container);

    return this.container;
  }
}

export default HomeContainer;
