import { Component, renderComponent } from '../modules/MyReact.js';
import Home from '../components/Home.js';
import { fetchProducts } from '../api/products.js';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {
        loading: false,
        data: null,
        error: null,
      },
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    this.setLoading('products');
    const { isError, data } = await fetchProducts();
    if (!isError) {
      this.setData('products', data.products);
    } else {
      this.setError('products', data);
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

    const { products } = this.state;
    const { history } = this.props;

    renderComponent(Home, { products, history }, this.container);

    return this.container;
  }
}

export default HomeContainer;
