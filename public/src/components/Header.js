import { Component, renderComponent } from '../modules/MyReact.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.container = document.createElement('header');
    this.container.className = 'header';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    const { history } = this.props;
    if (e.target.className === 'nav-link') {
      const path = e.target.dataset.path;
      history.push(path);
    }
  }

  render() {
    this.container.innerHTML = `
      <nav class="navigation">
        <ul>
          <li><span class="nav-link" data-path="/">Home</span></li>
          <li><span class="nav-link" data-path="/products">Products</span></li>
        </ul>
      </nav>
    `;

    return this.container;
  }
}

export default Header;
