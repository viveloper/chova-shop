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
      setUser,
    } = this.props;

    if (user) {
      history.push('/');
      return this.container;
    }
    
    renderComponent(
      RegisterContainer,
      { 
        history,
        setUser,
      },
      this.container
    );    

    return this.container;
  }
}

export default RegisterPage;
