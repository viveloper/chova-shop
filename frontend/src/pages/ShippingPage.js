import { Component, renderComponent } from '../modules/MyReact.js';
import ShippingContainer from '../containers/ShippingContainer.js';

class ShippingPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { 
      history, 
      user, 
      shippingAddress,
      onSubmit,
    } = this.props;

    if(!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }
    
    renderComponent(
      ShippingContainer,
      { 
        history,
        shippingAddress,
        onSubmit,
      },
      this.container
    );

    return this.container;
  }
}

export default ShippingPage;
