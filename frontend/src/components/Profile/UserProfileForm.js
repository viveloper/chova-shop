import {Component, renderComponent} from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import { validateEmail } from '../../modules/inputValidator.js';

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    const { 
      inputs: { name, email, password, confirmPassword }, 
      loading, 
      error 
    } = props;

    this.state = {
      inputs: {
        name,
        email,
        password,
        confirmPassword,
      },
      loading,
      error,
    }

    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.container.querySelector('input[id=name]').value;
    const email = this.container.querySelector('input[id=email]').value;
    const password = this.container.querySelector('input[id=password]').value;
    const confirmPassword = this.container.querySelector('input[id=confirmPassword]').value;

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
  }

  render() {
    const { 
      inputs,
      loading,
      error,
    } = this.state;

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        this.container
      );
      return this.container;
    }    

    const errorMessage = error?.message ? error.message : '';

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${inputs.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${inputs.email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${inputs.password}">
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input placeholder="Confirm password" type="password" id="confirmPassword" class="form-control" value="${inputs.confirmPassword}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default ProfileForm