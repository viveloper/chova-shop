import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Counter from '../components/Counter.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
  }

  render() {
    this.container.innerHTML = '';

    const { history } = this.props;

    renderComponent(Header, { history }, this.container);

    const title = document.createElement('h1');
    title.innerText = 'Home';
    this.container.appendChild(title);

    renderComponent(Counter, null, this.container);

    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default HomePage;
