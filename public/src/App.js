import Component from './components/Component.js';
import HomePage from './components/HomePage.js';

class App extends Component {
  constructor($target, props) {
    super();
    this.$target = $target;
    this.props = props;
    this.render();
  }
  render() {
    switch (path) {
      case '/':
        new HomePage(this.$target);
        break;
      case '/products/':
        break;
      case '/product-detail/':
        break;
      case '/checkout/':
        break;
      default:
        break;
    }
  }
}

export default App;
