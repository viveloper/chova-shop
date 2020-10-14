import { Component, renderComponent } from '../modules/MyReact.js';
import AdminUsers from '../components/AdminUsers/AdminUsers.js';
import * as usersApi from '../api/users.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminUsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    this.fetchUsers();
  }

  deleteUser = async (userId) => {
    const token = this.props.user.data.token;
    await usersApi.deleteUser(token, { id: userId });
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const token = this.props.user.data.token;

    asyncHandler.setLoading.call(this, 'users');
    const { isError, data } = await usersApi.fetchUsers(token);
    if (!isError) {
      asyncHandler.setData.call(this, 'users', data);
    } else {
      asyncHandler.setError.call(this, 'users', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { users } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminUsers, 
      { 
        history, 
        users, 
        onUserDelete: this.deleteUser 
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminUsersContainer;
