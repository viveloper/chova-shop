import { Component, renderComponent } from '../modules/MyReact.js';
import UserProfileContainer from '../containers/UserProfileContainer.js';
import MyOrdersContainer from '../containers/MyOrdersContainer.js';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const { history, user, setUser } = this.props;

    if (!user) {
      history.push('/login');
      return this.container;
    }

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    const profileCol = document.createElement('div');
    profileCol.className = 'col-md-3';
    row.appendChild(profileCol);

    const profileTitle = document.createElement('h2');
    profileTitle.innerText = 'User Profile';
    profileCol.appendChild(profileTitle);

    renderComponent(UserProfileContainer, { user, setUser }, profileCol);

    const ordersCol = document.createElement('div');
    ordersCol.className = 'col-md-9';
    row.appendChild(ordersCol);

    const ordersTitle = document.createElement('h2');
    ordersTitle.innerText = 'My Orders';
    ordersCol.appendChild(ordersTitle);

    renderComponent(MyOrdersContainer, { history, user }, ordersCol);

    return this.container;
  }
}

export default ProfilePage;
