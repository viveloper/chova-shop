import {Component, renderComponent} from '../modules/MyReact.js';

class OrderProgressNavBar extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'justify-content-center mb-4 nav';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() === 'a') {
      this.props.history.push(e.target.getAttribute('href'));
    }
  }

  render() {
    const {step} = this.props;
    
    this.container.innerHTML = `      
      <div class="nav-item">
        <a href="/login" data-rb-event-key="/login" class="nav-link">Sign In</a>
      </div>
      <div class="nav-item">
        <a href="/shipping" data-rb-event-key="/shipping" class="nav-link${step >= 2 ? ' active' : ' disabled'}">Shipping</a>
      </div>
      <div class="nav-item">
        <a href="/payment" class="nav-link${step >= 3 ? ' active' : ' disabled'}" role="button" tabindex="-1" aria-disabled="true">Payment</a>
      </div>
      <div class="nav-item">
        <a href="/placeorder" class="nav-link${step >= 4 ? ' active' : ' disabled'}" role="button" tabindex="-1" aria-disabled="true">Place Order</a>
      </div>
    `;

    return this.container;
  }
}

export default OrderProgressNavBar;