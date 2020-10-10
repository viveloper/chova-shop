import { Component, renderComponent } from '../../modules/MyReact.js';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const title = document.createElement('h1');
    title.innerText = 'Profile';
    container.appendChild(title);

    return this.container;
  }
}

export default Profile;
