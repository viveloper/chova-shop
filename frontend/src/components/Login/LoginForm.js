import { Component } from '../../modules/MyReact.js';
import { validateEmail } from '../../modules/inputValidator.js';

class LoginForm extends Component {
  constructor(props) {
    super(props);    

    this.state = {
      inputs: {
        email: props.inputs.email,
        password: props.inputs.password,
      },
      error: props.error,
    }

    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;

    if (!email) {
      this.setState({
        inputs: { 
          email, 
          password,          
        },
        error: {
          message: 'Email is required',
        },
      });
      return;
    }
    if (!password) {      
      this.setState({
        inputs: { 
          email, 
          password,          
        },
        error: {
          message: 'Password is required',
        },
      });
      return;
    }
    if (!validateEmail(email)) {
      this.setState({
        inputs: { 
          email, 
          password,          
        },
        error: {
          message: 'Email is not valid',
        },
      });     
      return;
    }

    this.props.onSubmit({ email, password });
  };

  render() {
    const { 
      inputs: { 
        email, 
        password 
      }, 
      error,
    } = this.state;

    const errorMessage = error?.message ? error.message : '';

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${password}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    `;

    return this.container;
  }
}

export default LoginForm;
