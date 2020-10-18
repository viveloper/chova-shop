import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditUserContainer from '../containers/AdminEditUserContainer.js';

class AdminEditUserPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match, user } = this.props;
    const userId = match.params.id;

    if (!user.data || !user.data.isAdmin) {
      history.push('/login');
      return this.container;
    }
    
    renderComponent(AdminEditUserContainer, { history, user, userId }, this.container);

    return this.container;
  }
}

export default AdminEditUserPage;
