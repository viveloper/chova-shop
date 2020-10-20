import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditProductContainer from '../containers/AdminEditProductContainer.js';

class AdminEditProductPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match, user } = this.props;
    const productId = match.params.id;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }
    
    renderComponent(AdminEditProductContainer, { history, user, productId }, this.container);

    return this.container;
  }
}

export default AdminEditProductPage;
