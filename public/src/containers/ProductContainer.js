import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Rating from '../components/Rating.js';
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

    this.container = document.createElement('main');
    this.container.className = 'py-3';

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

    const {
      product: { loading, data, error },
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

    const title = document.createElement('h1');
    title.innerText = 'Product Detail';
    this.container.appendChild(title);

    const info1 = document.createElement('h2');
    info1.innerText = `Product Name : ${data.name}`;
    this.container.appendChild(info1);

    return this.container;
  }
}

export default ProductContainer;
