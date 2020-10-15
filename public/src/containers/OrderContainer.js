import { Component, renderComponent } from '../modules/MyReact.js';
import Order from '../components/Order/Order.js';
import * as ordersApi from '../api/orders.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: asyncInitState,
    }

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const {user, orderId} = this.props;    
    const token = user.data.token;

    asyncHandler.setLoading.call(this, 'order');
    const { isError, data } = await ordersApi.fetchOrder(token, orderId);
    if (!isError) {
      asyncHandler.setData.call(this, 'order', data);
    } else {
      asyncHandler.setError.call(this, 'order', data);
    }
  }

  pay = async () => {
    const {user, orderId} = this.props;    
    const token = user.data.token;

    const payInfo = {
      id: orderId,
      status: 'COMPLETED',
      update_time: new Date().toISOString(),
      payer: {
          email_address: user.data.email
      }
    };

    asyncHandler.setLoading.call(this, 'order');
    const { isError, data } = await ordersApi.payOrder(token, payInfo);
    if (!isError) {
      asyncHandler.setData.call(this, 'order', data);
    } else {
      asyncHandler.setError.call(this, 'order', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { order } = this.state;
    const { history, orderId } = this.props;

    renderComponent(Order, { history, orderId, order, onPayPalClick: this.pay }, this.container);

    return this.container;
  }
}

export default OrderContainer;