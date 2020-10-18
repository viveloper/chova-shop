import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import OrderDetail from './OrderDetail.js';
import OrderSummary from './OrderSummary.js';

class Order extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = ''

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const { 
      history, 
      user, 
      orderId, 
      order: { loading, data, error }, 
      onPayPalClick, 
      onMarkDeliveredClick 
    } = this.props;    

    const title = document.createElement('h1');
    title.innerText = `Order ${orderId}`;
    container.appendChild(title);

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

    const orderDetailCol = document.createElement('div');
    orderDetailCol.className = 'col-md-8';
    row.appendChild(orderDetailCol);

    renderComponent(OrderDetail, { history, order: data }, orderDetailCol);

    const orderSummaryCol = document.createElement('div');
    orderSummaryCol.className = 'col-md-4';
    row.appendChild(orderSummaryCol);

    renderComponent(OrderSummary, { user, order: data, onPayPalClick, onMarkDeliveredClick }, orderSummaryCol);

    return this.container;
  }
}

export default Order;
