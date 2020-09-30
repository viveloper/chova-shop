import Component from './Component.js';

class Header extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'header',
        className: 'header',
      },
      props
    );

    this.handleClick = this.handleClick.bind(this);

    this.render();
  }

  handleClick(e) {
    if (e.target.className === 'nav-link') {
      const path = e.target.dataset.path;
      this.props.history.push(path);
    }
  }

  render() {
    this.el.innerHTML = `
      <nav>
        <ul>
          <li><span class="nav-link" data-path="/">Home</span></li>
          <li><span class="nav-link" data-path="/products">Products</span></li>
        </ul>
      </nav>
    `;
    this.el.addEventListener('click', this.handleClick);
  }
}

export default Header;
