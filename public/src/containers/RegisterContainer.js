import { Component, renderComponent } from '../modules/MyReact.js';
import Register from '../components/Register/Register.js';
import { validateEmail } from '../modules/inputValidator.js';

class RegisterContainer extends Component {
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
    const { register, setError, setInputs } = this.props;

    const name = e.target.querySelector('#name').value;
    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;
    const confirmPassword = e.target.querySelector('#confirmPassword').value;

    setInputs({ name, email, password, confirmPassword });

    if (!name) {
      setError('Name is requried');
      return;
    }
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
    if (password !== confirmPassword) {
      setError('Password do not match');
      return;
    }

    register({ name, email, password });
  };

  render() {
    this.container.innerHTML = '';

    const {
      history,
      user,
      inputs: { name, email, password, confirmPassword },
    } = this.props;

    renderComponent(
      Register,
      { history, name, email, password, confirmPassword, user },
      this.container
    );

    return this.container;
  }
}

export default RegisterContainer;
