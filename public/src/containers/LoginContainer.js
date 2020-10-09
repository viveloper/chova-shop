import { Component, renderComponent } from '../modules/MyReact.js';
import Login from '../components/Login/Login.js';
import { validateEmail } from '../modules/inputValidator.js';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.addEventListener('submit', this.handleSubmit);
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault();
      this.props.history.push(e.target.getAttribute('href'));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, setError, setInputs } = this.props;

    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;

    setInputs({ email, password });

    if (!email) {
      setError('Email is requried');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Email is not valid');
      return;
    }

    login({ email, password });
  };

  render() {
    this.container.innerHTML = '';

    const {
      history,
      user,
      inputs: { email, password },
    } = this.props;

    renderComponent(Login, { history, email, password, user }, this.container);

    return this.container;
  }
}

export default LoginContainer;
