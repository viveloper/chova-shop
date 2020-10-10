import { Component, renderComponent } from '../modules/MyReact.js';
import HomeContainer from '../containers/HomeContainer.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history } = this.props;
    
    renderComponent(HomeContainer, { history }, this.container);    

    return this.container;
  }
}

export default HomePage;
