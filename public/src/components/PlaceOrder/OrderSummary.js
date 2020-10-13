import {Component, renderComponent} from '../../modules/MyReact.js';

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
      console.log('submit');
    }
  }

  getSummary = () => {
    const {cart} = this.props;

    const itemsPrice = cart.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
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
    const {
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = this.getSummary();

    this.container.innerHTML = `
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h2>Order Summary</h2>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Items</div>
            <div class="col">$${itemsPrice}</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Shipping</div>
            <div class="col">$${shippingPrice}</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Tax</div>
            <div class="col">$${taxPrice}</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Total</div>
            <div class="col">$${totalPrice}</div>
          </div>
        </div>
        <div class="list-group-item">
          <button type="button" class="btn-block btn btn-primary">Place Order</button>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default OrderSummary;