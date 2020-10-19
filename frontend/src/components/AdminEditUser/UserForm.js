import {Component } from '../../modules/MyReact.js';
import { validateEmail } from '../../modules/inputValidator.js';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: props.inputs.name,
        email: props.inputs.email,
        isAdmin: props.inputs.isAdmin,
      },
      error: props.error,
    }
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[id=name]').value;
    const email = e.target.querySelector('input[id=email]').value;
    const isAdmin = e.target.querySelector('input[id=isadmin]').checked;

    const inputs = { name, email, isAdmin };

    if (!name) {
      this.setState({
        inputs,
        error: { message: 'Name is requried' },
      });
      return;
    }
    if (!email) {      
      this.setState({
        inputs,
        error: { message: 'Email is requried' },
      });
      return;
    }
    if (!validateEmail(email)) {      
      this.setState({
        inputs,
        error: { message: 'Email is not valid' },
      });
      return;
    }

    this.props.onSubmit(inputs);
  }

  render() {    
    const { inputs, error } = this.state;

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
        <div class="form-check">
          <input type="checkbox" id="isadmin" class="form-check-input"${inputs.isAdmin ? ' checked' : ''}>
          <label title="" for="isadmin" class="form-check-label">Is Admin</label>
        </div>
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default UserForm;