import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Product from '../components/Product.js';
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

    this.container = document.createElement('main');
    this.container.className = 'py-3';

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

    const {
      products: { loading, data, error },
    } = this.state;

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        this.container
      );
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      this.container.appendChild(errorEl);

      return this.container;
    }
    if (!data) return this.container;

    const row = document.createElement('div');
    row.className = 'row';
    this.container.appendChild(row);

    data.forEach((product) => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      row.appendChild(col);

      renderComponent(Product, { product, history: this.props.history }, col);
    });

    return this.container;
  }
}

export default HomeContainer;
