import { Component, renderComponent } from '../modules/MyReact.js';
import ProfileContainer from '../containers/ProfileContainer.js';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, user } = this.props;

    if (!user) {
      history.push('/login');
      return this.container;
    }

    renderComponent(ProfileContainer, { history, user }, this.container);

    return this.container;
  }
}

export default ProfilePage;
