import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import LoginContainer from '../containers/LoginContainer.js';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const {
      history,
      user,
      inputs,
      login,
      logout,
      setLoginError,
      onLoginInputsChange,
    } = this.props;

    if (user.data) {
      history.push('/');
      return this.container;
    }

    renderComponent(Header, { history, user, logout }, this.container);
    renderComponent(
      LoginContainer,
      { history, user, inputs, login, setLoginError, onLoginInputsChange },
      this.container
    );
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default LoginPage;
