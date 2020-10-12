import {Component, renderComponent} from '../../modules/MyReact.js';

class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
  }

  render() {
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
          <tr>
            <td>5f74c8d823d9100004671c1b</td>
            <td>2020-09-30</td>
            <td>214.98</td>
            <td>2020-10-04</td>
            <td><i class="fas fa-times" style="color: red;"></i></td>
            <td><a href="/order/5f74c8d823d9100004671c1b" class="btn-sm btn btn-light">Details</a></td>
          </tr>
          <tr>
            <td>5f77b5c3ed2ad3000410fb5f</td>
            <td>2020-10-02</td>
            <td>203.49</td>
            <td><i class="fas fa-times" style="color: red;"></i></td>
            <td><i class="fas fa-times" style="color: red;"></i></td>
            <td><a href="/order/5f77b5c3ed2ad3000410fb5f" class="btn-sm btn btn-light">Details</a></td>
          </tr>
        </tbody>
      </table>
    `;

    return this.container;
  }
}

export default OrdersTable