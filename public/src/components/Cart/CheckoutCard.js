import { Component } from '../../modules/MyReact.js';

class CheckoutCard extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'card';
  }

  render() {
    const { totalItems, totalPrice } = this.props;

    this.container.innerHTML = `
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h2>Subtotal (${totalItems}) items</h2>
          $${totalPrice}
        </div>
        <div class="list-group-item">
          <button type="button" class="btn-block btn btn-primary">Proceed To Checkout</button>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default CheckoutCard;
