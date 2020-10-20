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

    const itemsPrice = Number(cart.items.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2));
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
    this.container.innerHTML = '';

    const {orderCreationInfo} = this.props;
    const prices = this.getSummary();

    const listGroup = document.createElement(div);
    listGroup.className = 'list-group list-group-flush';
    this.container.appendChild(listGroup);

    const listGroupItem01 = document.createElement('div');
    listGroupItem01.className = 'list-group-item';
    listGroupItem01.innerHTML = '<h2>Order Summary</h2>';
    listGroup.appendChild(listGroupItem01);

    const listGroupItem02 = document.createElement('div');
    listGroupItem02.className = 'list-group-item';
    listGroup.appendChild(listGroupItem02);
    listGroupItem02.innerHTML = `
      <div class="row">
        <div class="col">Items</div>
        <div class="col">$${prices.itemsPrice}</div>
      </div>
    `;
    

    const listGroupItem03 = document.createElement('div');
    listGroupItem03.className = 'list-group-item';
    listGroup.appendChild(listGroupItem03);
    listGroupItem03.innerHTML = `
      <div class="row">
        <div class="col">Shipping</div>
        <div class="col">$${prices.shippingPrice}</div>
      </div>
    `;

    const listGroupItem04 = document.createElement('div');
    listGroupItem04.className = 'list-group-item';
    listGroup.appendChild(listGroupItem04);
    listGroupItem04.innerHTML = `
      <div class="row">
        <div class="col">Tax</div>
        <div class="col">$${prices.taxPrice}</div>
      </div>
    `;

    const listGroupItem05 = document.createElement('div');
    listGroupItem05.className = 'list-group-item';
    listGroup.appendChild(listGroupItem05);
    listGroupItem05.innerHTML = `
      <div class="row">
        <div class="col">Total</div>
        <div class="col">$${prices.totalPrice}</div>
      </div>
    `;

    if(orderCreationInfo.loading) {
      const loadingItem = document.createElement('div');
      loadingItem.className = 'list-group-item';
      listGroup.appendChild(loadingItem);
      renderComponent(
        Loader,
        {
          width: '30px',
          height: '30px',
          margin: 'auto',
          display: 'block',
        },
        loadingItem
      )
    }

    if(orderCreationInfo.error) {
      const errorItem = document.createElement('div');
      errorItem.className = 'list-group-item';
      listGroup.appendChild(errorItem);
      errorItem.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${orderCreationInfo.error.message}
        </div>
      `;
    }

    const listGroupItem06 = document.createElement('div');
    listGroupItem06.className = 'list-group-item';
    listGroup.appendChild(listGroupItem06);
    listGroupItem06.innerHTML = `
      <button type="button" class="btn-block btn btn-primary">Place Order</button>
    `;

    return this.container;
  }
}

export default OrderSummary;