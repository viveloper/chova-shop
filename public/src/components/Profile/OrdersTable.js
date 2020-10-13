import {Component, renderComponent} from '../../modules/MyReact.js';
import Loader from '../Loader.js';

class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
  }

  render() {
    this.container.innerHTML = '';

    const { orders: { loading, data, error } } = this.props;

    console.log(data);

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
      this.container.className = '';
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      this.container.appendChild(errorEl);

      return this.container;
    }
    if (!data) return this.container;

    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${
          data.map((order) => `
            <tr>
              <td>${order._id}</td>
              <td>${new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${order.totalPrice}</td>
              <td>${order.isPaid ? new Date(order.paidAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td>${order.isDelivered ? new Date(order.deliveredAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td><a href="/order/5f74c8d823d9100004671c1b" class="btn-sm btn btn-light">Details</a></td>
            </tr>
          `).join('')
        }                   
        </tbody>
      </table>
    `;

    return this.container;
  }
}

export default OrdersTable