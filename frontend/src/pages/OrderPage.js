import { Component, renderComponent } from '../modules/MyReact.js';
import OrderContainer from '../containers/OrderContainer.js';

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, user } = this.props;
    const orderId = this.props.match.params.id;

    if(!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }
    
    renderComponent(OrderContainer, { history, user, orderId }, this.container);

    return this.container;
  }
}

export default OrderPage;
