import { Component, renderComponent } from '../modules/MyReact.js';
import Payment from '../components/Payment/Payment.js';

class PaymentContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const {history, onSubmit} = this.props;

    renderComponent(
      Payment, 
      {        
        history,
        step: 3,
        onSubmit,
      }, 
      this.container
    );

    return this.container;
  }
}

export default PaymentContainer;
