import { Component, renderComponent } from '../modules/MyReact.js';
import ProfileContainer from '../containers/ProfileContainer.js';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    renderComponent(ProfileContainer, null, this.container);

    return this.container;
  }
}

export default ProfilePage;
