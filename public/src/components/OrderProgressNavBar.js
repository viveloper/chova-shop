import {Component, renderComponent} from '../modules/MyReact.js';

class OrderProgressNavBar extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'justify-content-center mb-4 nav';
  }

  render() {
    this.container.innerHTML = `      
      <div class="nav-item">
        <a href="/login" data-rb-event-key="/login" class="nav-link">Sign In</a>
      </div>
      <div class="nav-item">
        <a href="/shipping" data-rb-event-key="/shipping" class="active nav-link active">Shipping</a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link disabled" role="button" tabindex="-1" aria-disabled="true">Payment</a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link disabled" role="button" tabindex="-1" aria-disabled="true">Place Order</a>
      </div>
    `;

    return this.container;
  }
}

export default OrderProgressNavBar;