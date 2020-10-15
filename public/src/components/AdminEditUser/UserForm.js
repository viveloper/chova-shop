import {Component } from '../../modules/MyReact.js';
import { validateEmail } from '../../modules/inputValidator.js';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: props.data.name,
        email: props.data.email,
        isAdmin: props.data.isAdmin,
      },
      error: '',
    }
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[id=name]').value;
    const email = e.target.querySelector('input[id=email]').value;
    const isAdmin = e.target.querySelector('input[id=isadmin]').checked;

    if (!name) {
      this.setState({
        inputs: { name, email, isAdmin},
        error: 'Name is requried',
      });
      return;
    }
    if (!email) {      
      this.setState({
        inputs: { name, email, isAdmin},
        error: 'Email is requried',
      });
      return;
    }
    if (!validateEmail(email)) {      
      this.setState({
        inputs: { name, email, isAdmin},
        error: 'Email is not valid',
      });
      return;
    }

    this.props.onSubmit({ name, email, isAdmin });
  }

  render() {    
    const { inputs, error } = this.state;

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
      <div class="text-danger my-3 px-2" style="display:${
        error ? 'block' : 'none'
      }">
        ${error ? error : ''}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default UserForm;