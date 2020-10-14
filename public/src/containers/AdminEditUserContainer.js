import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditUser from '../components/AdminEditUser/AdminEditUser.js';
import * as usersApi from '../api/users.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminEditUserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { userId } = this.props;
    this.fetchUser(userId);
  }

  fetchUser = async (id) => {
    const token = this.props.user.data.token;
    asyncHandler.setLoading.call(this, 'user');
    const { isError, data } = await usersApi.fetchUser(token, { id });
    if (!isError) {
      asyncHandler.setData.call(this, 'user', data);
    } else {
      asyncHandler.setError.call(this, 'user', data);
    }
  }

  updateUser = async ({ name, email, isAdmin }) => {
    const token = this.props.user.data.token;
    const { userId } = this.props;
    asyncHandler.setLoading.call(this, 'user');
    const { isError, data } = await usersApi.updateUser(token, { id: userId, name, email, isAdmin });
    if (!isError) {
      asyncHandler.setData.call(this, 'user', data);
      this.props.history.push('/admin/users');
    } else {
      asyncHandler.setError.call(this, 'user', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { user } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminEditUser, 
      { 
        history, 
        user,
        onSubmit: this.updateUser,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminEditUserContainer;
