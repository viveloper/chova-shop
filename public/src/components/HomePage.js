import Component from './Component.js';
import Header from './Header.js';
import * as productsApi from '../api/products.js';

class HomePage extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'main',
        className: 'home-page',
      },
      props
    );

    this.state = {
      products: {
        loading: false,
        data: null,
        error: null,
      },
    };

    this.fetchProducts();

    this.render();
  }

  async fetchProducts() {
    this.setState({
      products: {
        loading: true,
        data: null,
        error: null,
      },
    });
    const { isError, data } = await productsApi.fetchProducts();
    if (!isError) {
      this.setState({
        products: {
          loading: false,
          data,
          error: null,
        },
      });
    } else {
      this.setState({
        products: {
          loading: false,
          data: null,
          error: data,
        },
      });
    }
  }

  render() {
    this.el.innerHTML = ``;

    new Header(this.el, { history: this.props.history });

    const {
      products: { loading, data, error },
    } = this.state;

    if (loading) {
      const loadingEl = document.createElement('h1');
      loadingEl.innerText = 'Loading...';
      this.el.appendChild(loadingEl);
      return;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      this.el.appendChild(errorEl);
      return;
    }
    if (!data) return;

    const title = document.createElement('h1');
    title.innerText = 'Home Page';

    const ul = document.createElement('ul');
    data.forEach((product) => {
      const li = document.createElement('li');
      li.innerText = product.name;
      ul.appendChild(li);
    });

    this.el.appendChild(title);
    this.el.appendChild(ul);
  }
}

export default HomePage;
