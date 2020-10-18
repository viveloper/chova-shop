import { Component, renderComponent } from '../modules/MyReact.js';
import HomeContainer from '../containers/HomeContainer.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match } = this.props;
    const pageNumber = match.params.pageNumber;
    
    renderComponent(HomeContainer, { history, pageNumber }, this.container);

    return this.container;
  }
}

export default HomePage;
