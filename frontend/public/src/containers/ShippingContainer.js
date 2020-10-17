import { Component, renderComponent } from '../modules/MyReact.js';
import Shipping from '../components/Shipping/Shipping.js';

class ShippingContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const {history, shippingAddress, onSubmit} = this.props;

    renderComponent(
      Shipping, 
      {        
        history,
        step: 2,
        shippingAddress,
        onSubmit,
      }, 
      this.container
    );

    return this.container;
  }
}

export default ShippingContainer;
