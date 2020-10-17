import { Component, renderComponent } from '../modules/MyReact.js';
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
      setError,
      setInputs,
    } = this.props;

    if (user.data) {
      history.push('/');
      return this.container;
    }
    
    renderComponent(
      RegisterContainer,
      { history, user, inputs, register, setError, setInputs },
      this.container
    );    

    return this.container;
  }
}

export default RegisterPage;
