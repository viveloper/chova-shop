import { Component, renderComponent } from '../modules/MyReact.js';
import Login from '../components/Login/Login.js';
import * as usersApi from '../api/users.js';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        email: '',
        password: '',
      },
      loading: false,
      error: null,
    }

    this.container = document.createElement('div');    
  }

  login = async ({ email, password }) => {
    this.setState({
      loading: true,
      error: null,
    });

    const { isError, data } = await usersApi.login({ email, password });

    if (!isError) {            
      this.props.setUser(data);
      this.props.history.push('/');
    } else {
      this.setState({      
        inputs: {
          email,
          password,
        },
        loading: false,
        error: data,
      });
    }    
  };

  render() {
    this.container.innerHTML = '';

    const { history } = this.props;
    const { inputs, loading, error } = this.state;

    renderComponent(
      Login, 
      { 
        history, 
        inputs,
        onSubmit: this.login,
        loading,
        error,
      }, 
      this.container
    );

    return this.container;
  }
}

export default LoginContainer;
