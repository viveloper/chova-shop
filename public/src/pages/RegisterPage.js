import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import RegisterContainer from '../containers/RegisterContainer.js';

class RegisterPage extends Component {
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
      register,
      logout,
      setError,
      onInputsChange,
    } = this.props;

    if (user.data) {
      history.push('/');
      return this.container;
    }

    renderComponent(Header, { history, user, logout }, this.container);
    renderComponent(
      RegisterContainer,
      { history, user, inputs, register, setError, onInputsChange },
      this.container
    );
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default RegisterPage;
