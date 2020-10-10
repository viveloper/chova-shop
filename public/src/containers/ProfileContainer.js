import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Profile from '../components/Profile/Profile.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    renderComponent(Profile, null, this.container);

    return this.container;
  }
}

export default ProfileContainer;
