import { Component } from '../../modules/MyReact.js';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('form');
  }

  render() {
    const { email, password, error } = this.props;

    const errorMessage = error?.message ? error.message : '';

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="text" id="email" class="form-control" value="${email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${password}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${
        errorMessage ? 'block' : 'none'
      }">
        ${error?.message ? error.message : ''}
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    `;

    return this.container;
  }
}

export default RegisterForm;
