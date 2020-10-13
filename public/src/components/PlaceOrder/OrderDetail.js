import {Component, renderComponent} from '../../modules/MyReact.js';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {     
    this.container.innerHTML = `
      <div class="list-group-item">
        <h2>Shipping</h2>
        <p><strong>Address:</strong>Address, City 1235, Country</p>
      </div>
      <div class="list-group-item">
        <h2>Payment Method</h2>
        <strong>Method: </strong>PayPal
      </div>
      <div class="list-group-item">
        <h2>Order Items</h2>
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <div class="row">
              <div class="col-md-1">
                <img src="/images/phone.jpg" alt="iPhone 11 Pro 256GB Memory" class="img-fluid rounded">
              </div>
              <div class="col">
                <a href="/product/5f74868bf49a7ae4f3a49273">iPhone 11 Pro 256GB Memory</a>
              </div>
              <div class="col-md-4">1 x $599.99 = $599.99</div>
            </div>
          </div>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default OrderDetail;