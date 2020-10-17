import { Component, renderComponent } from '../modules/MyReact.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
      isDropdownUserMenu: false,
      isDropdownAdminMenu: false,
    }

    this.container = document.createElement('header');
    this.container.className = 'header';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if(e.target.dataset.onclick === 'link') {
      e.preventDefault();
      const path = e.target.dataset.href;
      this.props.history.push(path);
      return;
    }
    if(e.target.dataset.onclick === 'toggle-navbar') {
      this.toggleCollaped();
      return;
    }
    if(e.target.dataset.onclick === 'dropdown-usermenu') {
      e.preventDefault();
      this.toggleDropdownUserMenu();
      return;
    }
    if(e.target.dataset.onclick === 'dropdown-adminmenu') {
      e.preventDefault();
      this.toggleDropdownAmdinMenu();
      return;
    }
    if(e.target.dataset.onclick === 'logout') {
      e.preventDefault();
      this.props.logout();
      return;
    }
  }

  toggleCollaped = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  toggleDropdownUserMenu = () => {
    this.setState({
      isDropdownUserMenu: !this.state.isDropdownUserMenu,
    });
  }

  toggleDropdownAmdinMenu = () => {
    this.setState({
      isDropdownAdminMenu: !this.state.isDropdownAdminMenu,
    });
  }

  render() {
    const { user } = this.props;
    const { isCollapsed, isDropdownUserMenu, isDropdownAdminMenu } = this.state;
    this.container.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="active navbar-brand" href="/" data-onclick="link" data-href="/">ChovaShop</a>
          <button class="navbar-toggler${isCollapsed ? ' collapsed' : ''}" type="button" aria-controls="basic-navbar-nav" aria-label="Toggle navigation" data-onclick="toggle-navbar">
            <span class="navbar-toggler-icon" data-onclick="toggle-navbar"></span>
          </button>
          <div class="navbar-collapse collapse${isCollapsed ? '' : ' show'}" id="basic-navbar-nav">
            <form class="form-inline">
              <input class="mr-sm-2 ml-sm-5 form-control" type="text" placeholder="Search Products..." name="q">
              <button class="p-2 btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="ml-auto navbar-nav">
              <a class="nav-link active" href="/cart" data-rb-event-key="/cart" data-onclick="link" data-href="/cart">
                <i class="fas fa-shopping-cart" data-onclick="link" data-href="/cart"></i> Cart
              </a>
              ${
                !user.data ? `
                <a class="nav-link" href="/login" data-rb-event-key="/login" data-onclick="link" data-href="/login">
                  <i class="fas fa-user" data-onclick="link" data-href="/login"></i> Sign In
                </a>
                ` : `
                <div class="dropdown nav-item${isDropdownUserMenu ? ' show' : ''}">
                  <a class="dropdown-toggle nav-link" id="username" href="#" role="button" aria-haspopup="true" aria-expanded="${isDropdownUserMenu}" data-onclick="dropdown-usermenu">${user.data.name}</a>
                  <div class="dropdown-menu${isDropdownUserMenu ? ' show' : ''}" aria-labelledby="username" style="margin: 0px;">
                    <a class="dropdown-item" href="/profile" data-onclick="link" data-href="/profile">Profile</a>
                    <a class="dropdown-item" id="btnLogout" role="button" href="#" data-onclick="logout">Logout</a>
                  </div>
                </div>
                ${user.data.isAdmin ? `
                <div class="dropdown nav-item${isDropdownAdminMenu ? ' show' : ''}">
                  <a class="dropdown-toggle nav-link" id="adminmenu" href="#" role="button" aria-haspopup="true" aria-expanded="${isDropdownAdminMenu}" data-onclick="dropdown-adminmenu">${user.data.name}</a>
                  <div class="dropdown-menu${isDropdownAdminMenu ? ' show' : ''}" aria-labelledby="adminmenu" style="margin: 0px;">
                    <a class="dropdown-item" href="/admin/users" data-onclick="link" data-href="/admin/users">Users</a>
                    <a class="dropdown-item" href="/admin/products" data-onclick="link" data-href="/admin/products">Products</a>
                    <a class="dropdown-item" href="/admin/orders" data-onclick="link" data-href="/admin/orders">Orders</a>
                  </div>
                </div>
                ` : ``}
                `
              }
            </div>
          </div>
        </div>
      </nav>
    `;

    return this.container;
  }
}

export default Header;
