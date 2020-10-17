import { Component, renderComponent } from '../modules/MyReact.js';
import AdminProductsContainer from '../containers/AdminProductsContainer.js';

class AdminProductsPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match, user } = this.props;
    const { pageNumber } = match.params;    

    if (!user.data || !user.data.isAdmin) {
      history.push('/login');
      return this.container;
    }
    
    renderComponent(AdminProductsContainer, { history, pageNumber, user }, this.container);

    return this.container;
  }
}

export default AdminProductsPage;
