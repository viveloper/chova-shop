import { Component, renderComponent } from '../modules/MyReact.js';
import Login from '../components/Login/Login.js';
import { validateEmail } from '../modules/inputValidator.js';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.addEventListener('keyup', this.handleInputChange);
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleInputChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    this.props.onLoginInputsChange(key, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      inputs: { email, password },
      login,
      setLoginError,
    } = this.props;

    // [ToDo] : input validation
    if (!email) {
      setLoginError('Email is requried');
      return;
    }
    if (!password) {
      setLoginError('Password is required');
      return;
    }
    if (!validateEmail(email)) {
      setLoginError('Email is not valid');
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
