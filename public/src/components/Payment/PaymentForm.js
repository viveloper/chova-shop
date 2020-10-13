import {Component, renderComponent} from '../../modules/MyReact.js';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const paymentMethod = this.container.querySelector('input[id=PayPal]').value;
    
    this.props.onSubmit({paymentMethod});
  }

  render() {     
    this.container.innerHTML = `
      <div class="form-group">
        <legend class="form-label">Select Method</legend>
        <div class="col">
          <div class="form-check">
            <input name="paymentMethod" type="radio" id="PayPal" class="form-check-input" value="PayPal" checked="">
            <label title="" for="PayPal" class="form-check-label">PayPal or Credit Card</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Continue</button>
    `;

    return this.container;
  }
}

export default PaymentForm;