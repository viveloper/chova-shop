import { Component, renderComponent } from '../modules/MyReact.js';
import AdminOrdersContainer from '../containers/AdminOrdersContainer.js';

class AdminOrdersPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, user } = this.props;

    if (!user.data || !user.data.isAdmin) {
      history.push('/login');
      return this.container;
    }
    
    renderComponent(AdminOrdersContainer, { history, user }, this.container);

    return this.container;
  }
}

export default AdminOrdersPage;
