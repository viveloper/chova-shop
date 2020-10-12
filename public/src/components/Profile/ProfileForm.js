import {Component, renderComponent} from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import { validateEmail } from '../../modules/inputValidator.js';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.container.querySelector('input[id=name]').value;
    const email = this.container.querySelector('input[id=email]').value;
    const password = this.container.querySelector('input[id=password]').value;
    const confirmPassword = this.container.querySelector('input[id=confirmPassword]').value;

    const {setError} = this.props;
    if (!name) {
      setError('Name is requried');
      return;
    }
    if (!email) {
      setError('Email is requried');
      return;
    }
    if (!validateEmail(email)) {
      setError('Email is not valid');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password do not match');
      return;
    }

    this.props.onSubmit({
      name,
      email,
      password,
      confirmPassword
    });
  }

  render() {
    const {loading, data, error} = this.props.user;

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
    if(!data) return this.container;

    const errorMessage = error?.message ? error.message : '';

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${data.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${data.email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control">
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input placeholder="Confirm password" type="password" id="confirmPassword" class="form-control">
      </div>
      <div class="text-danger my-3 px-2" style="display:${
        errorMessage ? 'block' : 'none'
      }">
        ${error?.message ? error.message : ''}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default ProfileForm