import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from './Loader.js';
import ProductCard from './ProductCard.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const {
      products: { loading, data, error },
      history,
    } = this.props;

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        container
      );
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);

      return this.container;
    }
    if (!data) return this.container;

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    data.forEach((product) => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      row.appendChild(col);

      renderComponent(ProductCard, { product, history }, col);
    });

    return this.container;
  }
}

export default Home;
