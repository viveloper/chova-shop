import { Component, renderComponent } from '../../modules/MyReact.js';
import LoginForm from './LoginForm.js';
import Loader from '../Loader.js';

class Login extends Component {
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
      email,
      password,
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
          <h1>Sign In</h1>
          ${renderComponent(
            LoginForm,
            { email, password, error },
            null,
            'HTML'
          )}
          <div class="py-3 row">
            <div class="col">
              New Customer? <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    `;

    return this.container;
  }
}

export default Login;
