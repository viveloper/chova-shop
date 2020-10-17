import {Component, renderComponent} from '../../modules/MyReact.js';
import Loader from '../Loader.js';

class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() === 'a') {
      const path = e.target.getAttribute('href');
      this.props.history.push(path);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { orders: { loading, data, error } } = this.props;

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
          <tr class="text-center">
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
            <tr class="text-center">
              <td>${order._id}</td>
              <td>${new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${order.totalPrice}</td>
              <td>${order.isPaid ? new Date(order.paidAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td>${order.isDelivered ? new Date(order.deliveredAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td><a href="/orders/${order._id}" class="btn-sm btn btn-light">Details</a></td>
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