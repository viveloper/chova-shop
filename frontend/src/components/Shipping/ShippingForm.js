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
    
    this.props.onSubmit({address, city, postalCode, country});
  }

  render() {     
    const {
      shippingAddress:{
        address, 
        city, 
        postalCode, 
        country
      }
    } = this.props;
    
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="address">Address</label>
        <input placeholder="Enter address" required="" type="text" id="address" class="form-control" value="${address}">
      </div>
      <div class="form-group">
        <label class="form-label" for="city">City</label>
        <input placeholder="Enter city" required="" type="text" id="city" class="form-control" value="${city}">
      </div>
      <div class="form-group">
        <label class="form-label" for="postalCode">Postal Code</label>
        <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" value="${postalCode}">
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Country</label>
        <input placeholder="Enter country" required="" type="text" id="country" class="form-control" value="${country}">
      </div>
      <button type="submit" class="btn btn-primary">Continue</button>
    `;

    return this.container;
  }
}

export default ShippingForm;