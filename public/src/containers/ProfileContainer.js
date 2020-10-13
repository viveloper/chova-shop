import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Profile from '../components/Profile/Profile.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';
import * as ordersApi from '../api/orders.js';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: asyncInitState,
    }

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const token = this.props.user.data.token;

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

    const { user, onProfileSubmit, setError } = this.props;
    const { orders } = this.state

    renderComponent(Profile, { user, orders, onProfileSubmit, setError }, this.container);

    return this.container;
  }
}

export default ProfileContainer;
