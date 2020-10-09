import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HomeContainer from '../containers/HomeContainer.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, user, logout } = this.props;

    renderComponent(Header, { history, user, logout }, this.container);
    renderComponent(HomeContainer, { history }, this.container);
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default HomePage;
