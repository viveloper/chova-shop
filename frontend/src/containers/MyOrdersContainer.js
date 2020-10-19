import { Component, renderComponent } from '../modules/MyReact.js';
import MyOrdersTable from '../components/Profile/MyOrdersTable.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';
import * as ordersApi from '../api/orders.js';

class MyOrdersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: asyncInitState,
    }

    this.container = document.createElement('div');

    this.initState();
  }

  initState() {
    this.fetchOrders();
  }

  fetchOrders = async () => {
    const { token } = this.props.user;

    asyncHandler.setLoading.call(this, 'orders');
    const { isError, data } = await ordersApi.fetchMyOrders(token);
    if (!isError) {
      asyncHandler.setData.call(this, 'orders', data);
    } else {
      this.setError('orders', data);
      asyncHandler.setError.call(this, 'orders', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { history } = this.props;
    const { orders } = this.state

    renderComponent(
      MyOrdersTable, 
      { 
        history, 
        orders,
      }, 
      this.container
    );

    return this.container;
  }
}

export default MyOrdersContainer;
