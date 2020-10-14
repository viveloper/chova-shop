import { Component, renderComponent } from '../modules/MyReact.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('header');
    this.container.className = 'header';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'username') return;
    if (e.target.id === 'adminmenu') return;
    if (e.target.id === 'btnLogout') {
      this.props.logout();
      return;
    }
    if (e.target.tagName.toLowerCase() === 'a') {
      const path = e.target.getAttribute('href');
      this.props.history.push(path);
      return;
    }
  };

  handleNavToggleClick = (toggler, navbar) => {
    toggler.classList.toggle('collapsed');
    navbar.classList.toggle('show');
  };

  handleDropdownToggleClick = (
    e,
    dropdwonNavItem,
    dropdownToggler,
    dropdownMenu
  ) => {
    e.preventDefault();
    dropdwonNavItem.classList.toggle('show');
    dropdownToggler.setAttribute(
      'aria-expanded',
      dropdownToggler.getAttribute('aria-expanded') === 'false'
        ? 'true'
        : 'false'
    );
    dropdownMenu.classList.toggle('show');
  };

  render() {
    this.container.innerHTML = '';

    const user = this.props.user.data;

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
    container.appendChild(logo);

    const navbarToggler = document.createElement('button');
    navbarToggler.className = 'navbar-toggler collapsed';
    navbarToggler.type = 'button';
    navbarToggler.setAttribute('aria-controls', 'basic-navbar-nav');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');
    navbarToggler.addEventListener('click', () =>
      this.handleNavToggleClick(navbarToggler, navbarBasic)
    );
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
    navigation.appendChild(cartLink);

    const cartIcon = document.createElement('i');
    cartIcon.className = 'fas fa-shopping-cart';
    cartLink.appendChild(cartIcon);
    cartLink.appendChild(document.createTextNode(' Cart'));

    if (!user) {
      const signinLink = document.createElement('a');
      signinLink.className = 'nav-link';
      signinLink.setAttribute('href', '/login');
      signinLink.setAttribute('data-rb-event-key', '/login');
      navigation.appendChild(signinLink);

      const signinIcon = document.createElement('i');
      signinIcon.className = 'fas fa-user';
      signinLink.appendChild(signinIcon);
      signinLink.appendChild(document.createTextNode(' Sign In'));
    } else {
      const dropdwonNavItem = document.createElement('div');
      dropdwonNavItem.className = 'dropdown nav-item';
      navigation.appendChild(dropdwonNavItem);

      const dropdownToggler = document.createElement('a');
      dropdownToggler.className = 'dropdown-toggle nav-link';
      dropdownToggler.id = 'username';
      dropdownToggler.setAttribute('href', '#');
      dropdownToggler.setAttribute('role', 'button');
      dropdownToggler.setAttribute('aria-haspopup', 'true');
      dropdownToggler.setAttribute('aria-expanded', 'false');
      dropdownToggler.innerText = user.name;
      dropdownToggler.addEventListener('click', (e) =>
        this.handleDropdownToggleClick(
          e,
          dropdwonNavItem,
          dropdownToggler,
          dropdownMenu
        )
      );
      dropdwonNavItem.appendChild(dropdownToggler);

      const dropdownMenu = document.createElement('div');
      dropdownMenu.className = 'dropdown-menu';
      dropdownMenu.style.margin = '0px';
      dropdownMenu.setAttribute('aria-labelledby', 'username');
      dropdwonNavItem.appendChild(dropdownMenu);

      const profileLink = document.createElement('a');
      profileLink.className = 'dropdown-item';
      profileLink.setAttribute('href', '/profile');
      profileLink.innerText = 'Profile';
      dropdownMenu.appendChild(profileLink);

      const logoutLink = document.createElement('a');
      logoutLink.className = 'dropdown-item';
      logoutLink.id = 'btnLogout';
      logoutLink.setAttribute('role', 'button');
      logoutLink.setAttribute('href', '#');
      logoutLink.innerText = 'Logout';
      dropdownMenu.appendChild(logoutLink);

      if(user.isAdmin) {
        const dropdwonNavItem = document.createElement('div');
        dropdwonNavItem.className = 'dropdown nav-item';
        navigation.appendChild(dropdwonNavItem);

        const dropdownToggler = document.createElement('a');
        dropdownToggler.className = 'dropdown-toggle nav-link';
        dropdownToggler.id = 'adminmenu';
        dropdownToggler.setAttribute('href', '#');
        dropdownToggler.setAttribute('role', 'button');
        dropdownToggler.setAttribute('aria-haspopup', 'true');
        dropdownToggler.setAttribute('aria-expanded', 'false');
        dropdownToggler.innerText = 'Admin';
        dropdownToggler.addEventListener('click', (e) =>
          this.handleDropdownToggleClick(
            e,
            dropdwonNavItem,
            dropdownToggler,
            dropdownMenu
          )
        );
        dropdwonNavItem.appendChild(dropdownToggler);

        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu';
        dropdownMenu.style.margin = '0px';
        dropdownMenu.setAttribute('aria-labelledby', 'adminmenu');
        dropdwonNavItem.appendChild(dropdownMenu);

        const usersLink = document.createElement('a');
        usersLink.className = 'dropdown-item';
        usersLink.setAttribute('href', '/admin/users');
        usersLink.innerText = 'Users';
        dropdownMenu.appendChild(usersLink);

        const productsLink = document.createElement('a');
        productsLink.className = 'dropdown-item';
        productsLink.setAttribute('href', '/admin/products');
        productsLink.innerText = 'Products';
        dropdownMenu.appendChild(productsLink);

        const ordersLink = document.createElement('a');
        ordersLink.className = 'dropdown-item';
        ordersLink.setAttribute('href', '/admin/orders');
        ordersLink.innerText = 'Orders';
        dropdownMenu.appendChild(ordersLink);
      }
    }

    return this.container;
  }
}

export default Header;
