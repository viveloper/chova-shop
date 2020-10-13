import {Component, renderComponent} from '../../modules/MyReact.js';
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
      const { cart } = this.props;

      const order = {
        orderItems: cart.items.map((item) => ({...item, product: item._id})),
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        ...this.getSummary(),
      }

      this.props.onSubmit(order);
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
    const {orderCreationInfo} = this.props;
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
          orderCreationInfo.loading ? `
            <div class="list-group-item">
              ${renderComponent(
                Loader,
                {
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                  display: 'block',
                },
                null,
                'HTML'
              )}
            </div>
          ` : ''
        }
        ${
          orderCreationInfo.error ? `
            <div class="list-group-item">
              <span style="color:red">${orderCreationInfo.error.message}</span>
            </div>
          ` : ''
        }
        <div class="list-group-item">
          <button type="button" class="btn-block btn btn-primary">Place Order</button>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default OrderSummary;