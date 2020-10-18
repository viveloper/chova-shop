import { Component, renderComponent } from '../../modules/MyReact.js';
import RegisterForm from './RegisterForm.js';
import Loader from '../Loader.js';

class Register extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const {
      name,
      email,
      password,
      confirmPassword,
      user: { loading, error },
    } = this.props;

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        container
      );
      return this.container;
    }

    container.innerHTML = `
      <div class="justify-content-md-center row">
        <div class="col-md-6 col-12">
          <h1>Sign Up</h1>
          ${renderComponent(
            RegisterForm,
            { name, email, password, confirmPassword, error },
            null,
            'HTML'
          )}          
          <div class="py-3 row">
            <div class="col">Have an Account? <a href="/login">Login</a></div>
          </div>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default Register;
