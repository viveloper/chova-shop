import {Component, renderComponent} from '../../modules/MyReact.js';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const address = this.container.querySelector('input[id=address]').value;
    const city = this.container.querySelector('input[id=city]').value;
    const postalCode = this.container.querySelector('input[id=postalCode]').value;
    const country = this.container.querySelector('input[id=country]').value;
    console.log({address, city, postalCode, country});
  }

  render() {        
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="address">Address</label>
        <input placeholder="Enter address" required="" type="text" id="address" class="form-control" value="">
      </div>
      <div class="form-group">
        <label class="form-label" for="city">City</label>
        <input placeholder="Enter city" required="" type="text" id="city" class="form-control" value="">
      </div>
      <div class="form-group">
        <label class="form-label" for="postalCode">Postal Code</label>
        <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" value="">
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Country</label>
        <input placeholder="Enter country" required="" type="text" id="country" class="form-control" value="">
      </div>
      <button type="submit" class="btn btn-primary">Continue</button>
    `;

    return this.container;
  }
}

export default ShippingForm;