import { Component, renderComponent } from '../modules/MyReact.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.container = document.createElement('header');
    this.container.className = 'header';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';

    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
    this.container.appendChild(navbar);

    const container = document.createElement('div');
    container.className = 'container';
    navbar.appendChild(container);

    const logo = document.createElement('a');
    logo.className = 'active navbar-brand';
    logo.setAttribute('href', '/');
    logo.innerText = 'ChovaShop';
    logo.addEventListener('click', (e) => this.handleLinkClick(e, '/'));
    container.appendChild(logo);

    const navbarToggler = document.createElement('button');
    navbarToggler.className = 'navbar-toggler collapsed';
    navbarToggler.type = 'button';
    navbarToggler.setAttribute('aria-controls', 'basic-navbar-nav');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');
    container.appendChild(navbarToggler);

    const navbarTogglerIcon = document.createElement('span');
    navbarTogglerIcon.className = 'navbar-toggler-icon';
    navbarToggler.appendChild(navbarTogglerIcon);

    const navbarBasic = document.createElement('div');
    navbarBasic.className = 'navbar-collapse collapse';
    navbarBasic.id = 'basic-navbar-nav';
    container.appendChild(navbarBasic);

    const form = document.createElement('form');
    form.className = 'form-inline';
    navbarBasic.appendChild(form);

    const inputSearch = document.createElement('input');
    inputSearch.className = 'mr-sm-2 ml-sm-5 form-control';
    inputSearch.type = 'text';
    inputSearch.placeholder = 'Search Products...';
    inputSearch.name = 'q';
    form.appendChild(inputSearch);

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'p-2 btn btn-outline-success';
    btnSubmit.type = 'submit';
    btnSubmit.innerText = 'Search';
    form.appendChild(btnSubmit);

    const navigation = document.createElement('div');
    navigation.className = 'ml-auto navbar-nav';
    navbarBasic.appendChild(navigation);

    const cartLink = document.createElement('a');
    cartLink.className = 'nav-link active';
    cartLink.setAttribute('href', '/cart');
    cartLink.setAttribute('data-rb-event-key', '/cart');
    cartLink.addEventListener('click', (e) => this.handleLinkClick(e, '/cart'));
    navigation.appendChild(cartLink);

    const cartIcon = document.createElement('i');
    cartIcon.className = 'fas fa-shopping-cart';
    cartLink.appendChild(cartIcon);
    cartLink.appendChild(document.createTextNode(' Cart'));

    const signinLink = document.createElement('a');
    signinLink.className = 'nav-link';
    signinLink.setAttribute('href', '/login');
    signinLink.setAttribute('data-rb-event-key', '/login');
    signinLink.addEventListener('click', (e) =>
      this.handleLinkClick(e, '/login')
    );
    navigation.appendChild(signinLink);

    const signinIcon = document.createElement('i');
    signinIcon.className = 'fas fa-user';
    signinLink.appendChild(signinIcon);
    signinLink.appendChild(document.createTextNode(' Sign In'));

    return this.container;
  }
}

export default Header;
