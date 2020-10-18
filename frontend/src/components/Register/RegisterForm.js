import { Component } from '../../modules/MyReact.js';
import { validateEmail } from '../../modules/inputValidator.js';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: props.inputs.name,
        email: props.inputs.email,
        password: props.inputs.password,
        confirmPassword: props.inputs.confirmPassword,
      },
      error: props.error,
    }

    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);    
  }

  handleSubmit = (e) => {
    e.preventDefault();    

    const name = e.target.querySelector('#name').value;
    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;
    const confirmPassword = e.target.querySelector('#confirmPassword').value;
    
    const inputs = { name, email, password, confirmPassword };

    if (!name) {
      this.setState({
        inputs,
        error: {
          message: 'Name is required',
        },
      });
      return;
    }
    if (!email) {
      this.setState({
        inputs,
        error: {
          message: 'Email is required',
        },
      });
      return;
    }
    if (!password) {
      this.setState({
        inputs,
        error: {
          message: 'Password is required',
        },
      });
      return;
    }
    if (!validateEmail(email)) {
      this.setState({
        inputs,
        error: {
          message: 'Email is not valid',
        },
      });
      return;
    }
    if (password !== confirmPassword) {
      this.setState({
        inputs,
        error: {
          message: 'Password do not match',
        },
      });
      return;
    }
    
    this.props.onSubmit(inputs);    
  };

  render() {
    const {
      inputs: { 
        name, 
        email, 
        password, 
        confirmPassword,
      }, 
      error,
    } = this.state;

    const errorMessage = error?.message ? error.message : '';

    this.container.innerHTML = `      
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="text" id="name" class="form-control" value="${name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="text" id="email" class="form-control" value="${email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${password}">
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input placeholder="Confirm password" type="password" id="confirmPassword" class="form-control" value="${confirmPassword}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Register</button>      
    `;

    return this.container;
  }
}

export default RegisterForm;
