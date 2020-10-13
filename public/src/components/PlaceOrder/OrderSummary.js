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

  render() {     
    this.container.innerHTML = `
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h2>Order Summary</h2>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Items</div>
            <div class="col">$599.99</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Shipping</div>
            <div class="col">$0.00</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Tax</div>
            <div class="col">$90.00</div>
          </div>
        </div>
        <div class="list-group-item">
          <div class="row">
            <div class="col">Total</div>
            <div class="col">$689.99</div>
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