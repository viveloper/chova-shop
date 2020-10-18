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
      profileFormData: {
        inputs: {
          name: props.user.name,
          email: props.user.email,
          password: '',
          confrimPassword: '',
        },
        loading: false,
        error: null,
      }      
    }

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const token = this.props.user.token;

    asyncHandler.setLoading.call(this, 'orders');
    const { isError, data } = await ordersApi.fetchMyOrders(token);
    if (!isError) {
      asyncHandler.setData.call(this, 'orders', data);
    } else {
      this.setError('orders', data);
      asyncHandler.setError.call(this, 'orders', data);
    }
  }

  updateUserProfile = async ({ name, email, password, confrimPassword }) => {
    const { token } = this.state.user;
    const inputs = { name, email, password, confrimPassword };    

    this.setState({
      profileFormData: {
        ...this.state.profileFormData,
        loading: true,
        error: null,
      }      
    });

    const { isError, data } = await usersApi.updateUserProfile(token, { name, email, password });

    if (!isError) {            
      this.props.setUser(data);      
    } else {
      this.setState({      
        profileFormData: {
          inputs,
          loading: false,
          error: data,
        }      
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { history, user } = this.props;
    const { orders, profileFormData } = this.state

    renderComponent(
      Profile, 
      { 
        history, 
        user, 
        orders, 
        profileFormData, 
        onProfileSubmit: this.updateUserProfile,
      }, 
      this.container
    );

    return this.container;
  }
}

export default ProfileContainer;
