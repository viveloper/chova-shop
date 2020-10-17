import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import OrdersTable from './OrdersTable.js';

class AdminOrders extends Component {
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

    const title = document.createElement('h1');
    title.innerText = 'Orders';
    container.appendChild(title);

    const {
      orders: { loading, data, error },
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

    renderComponent(OrdersTable, { history, data }, container);

    return this.container;
  }
}

export default AdminOrders;
