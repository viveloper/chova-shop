import { Component, renderComponent } from '../modules/MyReact.js';
import PlaceOrder from '../components/PlaceOrder/PlaceOrder.js';

class PlaceOrderContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const {history, onSubmit} = this.props;

    renderComponent(
      PlaceOrder, 
      {        
        history,
        step: 4,
        onSubmit,
      }, 
      this.container
    );

    return this.container;
  }
}

export default PlaceOrderContainer;
