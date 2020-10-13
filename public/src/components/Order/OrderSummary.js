import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'card';    
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    e.preventDefault();
    
    if(e.target.tagName.toLowerCase() === 'button') {      
      this.props.onPayPalClick();
    }
  }

  getSummary = () => {
    const { order: { orderItems } } = this.props;

    const itemsPrice = orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 100;
    const taxPrice = Number((itemsPrice * 0.15).toFixed(2));
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    return {
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    }
  }

  render() {        
    const { order: { isPaid } } = this.props;
    const prices = this.getSummary();

    this.container.innerHTML = `
    <div class="list-group list-group-flush">
      <div class="list-group-item">
        <h2>Order Summary</h2>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Items</div>
          <div class="col">$${prices.itemsPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Shipping</div>
          <div class="col">$${prices.shippingPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Tax</div>
          <div class="col">$${prices.taxPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Total</div>
          <div class="col">$${prices.totalPrice}</div>
        </div>
      </div>      
      ${
        !isPaid ? `
          <div class="list-group-item">
            <button type="button" class="btn-block btn btn-primary">PayPal</button>
          </div>
        ` : ''
      }      
    </div>
    `;

    return this.container;
  }
}

export default OrderSummary;
