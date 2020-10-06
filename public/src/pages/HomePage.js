import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductList from '../components/ProductList.js';
import { fetchProducts } from '../api/products.js';

class HomePage extends Component {
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
      this.setError('products', data.message);
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

    const { history } = this.props;
    const { products } = this.state;

    renderComponent(Header, { history }, this.container);

    const main = document.createElement('main');
    main.className = 'py-3';
    this.container.appendChild(main);

    const container = document.createElement('div');
    container.className = 'container';
    main.appendChild(container);

    const title = document.createElement('h1');
    title.innerText = 'Latest Products';
    container.appendChild(title);

    renderComponent(ProductList, { history, products }, container);

    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default HomePage;
