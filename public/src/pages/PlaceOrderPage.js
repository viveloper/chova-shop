import { Component, renderComponent } from '../modules/MyReact.js';
import PlaceOrderContainer from '../containers/PlaceOrderContainer.js';

class PlaceOrderPage extends Component {
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
      PlaceOrderContainer,
      { 
        history,
        onSubmit,
      },
      this.container
    );

    return this.container;
  }
}

export default PlaceOrderPage;
