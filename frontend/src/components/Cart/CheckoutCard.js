import { Component } from '../../modules/MyReact.js';

class CheckoutCard extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'card';    
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if (e.target.dataset.onclick === 'link-shipping') {
      this.props.history.push('/shipping');
    }
  };

  render() {
    const { totalItems, totalPrice } = this.props;

    this.container.innerHTML = `
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h2>Subtotal (${totalItems}) items</h2>
          $${totalPrice}
        </div>
        <div class="list-group-item">
          <button ${totalItems === 0 ? 'disabled' : ''} type="button" class="btn-block btn btn-primary" data-onclick="link-shipping">Proceed To Checkout</button>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default CheckoutCard;
