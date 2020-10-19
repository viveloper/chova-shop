import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditUser from '../components/AdminEditUser/AdminEditUser.js';
import * as usersApi from '../api/users.js';

class AdminEditUserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: '',
        email: '',
        isAdmin: null,
      },
      loading: false,
      formError: null,
      error: null,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { userId } = this.props;
    this.fetchUser(userId);
  }

  fetchUser = async (id) => {
    const token = this.props.user.token;
    this.setState({
      loading: true,
    })
    const { isError, data } = await usersApi.fetchUser(token, { id });
    if (!isError) {
      this.setState({
        loading: false,
        inputs: {
          name: data.name,
          email: data.email,
          isAdmin: data.isAdmin,
        },
        error: null,
      })
    } else {
      this.setState({
        loading: false,
        error: data,
      })
    }
  }

  updateUser = async ({ name, email, isAdmin }) => {
    const { token } = this.props.user;
    const { userId } = this.props;
    const inputs = { name, email, isAdmin };
    this.setState({
      loading: true,
    })
    const { isError, data } = await usersApi.updateUser(token, { id: userId, name, email, isAdmin });
    if (!isError) {
      this.setState({
        loading: false,
        formError: null,
      })
      this.props.history.push('/admin/users');
    } else {
      this.setState({
        loading: false,
        inputs,
        formError: data,
      })
    }
  }

  render() {
    this.container.innerHTML = '';

    const { inputs, loading, formError, error } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminEditUser, 
      { 
        history, 
        inputs,
        loading,
        formError,
        error,
        onSubmit: this.updateUser,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminEditUserContainer;
