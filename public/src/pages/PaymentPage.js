import { Component, renderComponent } from '../modules/MyReact.js';
import PaymentContainer from '../containers/PaymentContainer.js';

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { 
      history, 
      user,
      onSubmit,
    } = this.props;

    if(!user.data) {
      history.push('/login');
      return this.container;
    }
    
    renderComponent(
      PaymentContainer,
      { 
        history,
        onSubmit,
      },
      this.container
    );

    return this.container;
  }
}

export default PaymentPage;
