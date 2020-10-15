import { Component, renderComponent } from '../modules/MyReact.js';
import AdminOrders from '../components/AdminOrders/AdminOrders.js';
import * as ordersApi from '../api/orders.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminOrdersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    this.fetchOrders();
  }

  fetchOrders = async () => {
    const token = this.props.user.data.token;
    asyncHandler.setLoading.call(this, 'orders');
    const { isError, data } = await ordersApi.fetchOrders(token);
    if (!isError) {
      asyncHandler.setData.call(this, 'orders', data);
    } else {
      asyncHandler.setError.call(this, 'orders', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { orders } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminOrders,
      { 
        history, 
        orders,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminOrdersContainer;
