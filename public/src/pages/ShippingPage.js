import { Component, renderComponent } from '../modules/MyReact.js';
import ShippingContainer from '../containers/ShippingContainer.js';

class ShippingPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, user } = this.props;

    if(!user.data) {
      history.push('/login');
      return this.container;
    }
    
    renderComponent(
      ShippingContainer,
      { history },
      this.container
    );

    return this.container;
  }
}

export default ShippingPage;
