import { Component, renderComponent } from '../modules/MyReact.js';
import LoginContainer from '../containers/LoginContainer.js';
import queryString from '../modules/queryString.js';

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
      setUser,     
    } = this.props;

    const query = queryString(this.props.location.search);

    if (user) {
      history.push('/');
      return this.container;
    }
    
    renderComponent(
      LoginContainer,
      { 
        history,
        setUser,
        redirect: query.redirect,
      },
      this.container
    );

    return this.container;
  }
}

export default LoginPage;
