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
    
    if(e.target.dataset.name === 'btn-paypal') {      
      if(window.confirm('Are you sure?')) {
        this.props.onPayPalClick();
      }
      return;
    }
    if(e.target.dataset.name === 'btn-mark-delivered') {  
      this.props.onMarkDeliveredClick();
      return;
    }
  }

  getSummary = () => {
    const { order: { orderItems } } = this.props;

    const itemsPrice = Number(orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2));
    const shippingPrice = itemsPrice > 100 ? 0 : 100;
    const taxPrice = Number((itemsPrice * 0.15).toFixed(2));
    const totalPrice = Number((itemsPrice + shippingPrice + taxPrice).toFixed(2));

    return {
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    }
  }

  render() {        
    const { user, order: { isPaid, isDelivered } } = this.props;
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
            <button type="button" class="btn-block btn btn-primary" data-name="btn-paypal">PayPal</button>
          </div>
        ` : !user.data.isAdmin ? '' : !isDelivered ? `
          <div class="list-group-item">
            <button type="button" class="btn-block btn btn-primary" data-name="btn-mark-delivered">Mark As Delivered</button>
          </div>
        ` : ''
      }      
    </div>
    `;

    return this.container;
  }
}

export default OrderSummary;
