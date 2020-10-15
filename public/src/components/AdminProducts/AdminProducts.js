import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import ProductsTitle from './ProductsTitle.js';
import ProductsTable from './ProductsTable.js';

class AdminProducts extends Component {
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
      onDelete,
    } = this.props;

    renderComponent(ProductsTitle, { history }, container);

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

    renderComponent(ProductsTable, { history, data, onDelete }, container);

    return this.container;
  }
}

export default AdminProducts;
