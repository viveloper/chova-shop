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
    if (e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      history.push(path);
    }
  }

  render() {
    this.container.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a href="/" class="active navbar-brand">ProShop</a>
          <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="basic-navbar-nav">
            <form class="form-inline">
              <input name="q" placeholder="Search Products..." type="text" class="mr-sm-2 ml-sm-5 form-control">
              <button type="submit" class="p-2 btn btn-outline-success">Search</button>
            </form>
            <div class="ml-auto navbar-nav">
              <a href="/cart" data-rb-event-key="/cart" class="nav-link active"><i class="fas fa-shopping-cart"></i> Cart</a>
              <a href="/login" data-rb-event-key="/login" class="nav-link"><i class="fas fa-user"></i> Sign In</a>              
            </div>
          </div>
        </div>
      </nav>
    `;

    return this.container;
  }
}

export default Header;
