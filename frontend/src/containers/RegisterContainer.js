import { Component, renderComponent } from '../modules/MyReact.js';
import Register from '../components/Register/Register.js';
import { validateEmail } from '../modules/inputValidator.js';
import * as usersApi from '../api/users.js';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: '', 
        email: '', 
        password: '', 
        confirmPassword: '',
      },
      loading: false,
      error: null,
    }

    this.container = document.createElement('div');    
  }

  register = async ({ name, email, password, confirmPassword }) => {
    this.setState({
      loading: true,
      error: null,
    });

    const { isError, data } = await usersApi.register({ name, email, password });

    if (!isError) {            
      this.props.setUser(data);
      this.props.history.push('/');
    } else {
      this.setState({      
        inputs: {
          name, 
          email, 
          password, 
          confirmPassword,
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
      Register,
      { 
        history, 
        inputs,
        onSubmit: this.register,
        loading,
        error, 
      },
      this.container
    );

    return this.container;
  }
}

export default RegisterContainer;
