import Component from './components/Component.js';
import HomePage from './components/HomePage.js';
import ProductsPage from './components/ProductsPage.js';
import ProductDetailPage from './components/ProductDetailPage.js';
import BrowserRouter from './modules/BrowserRouter.js';

class App extends Component {
  constructor($target, props) {
    super(props);
    this.router = new BrowserRouter($target);
    this.render();
  }
  render() {
    this.router.addRoute({
      path: '/',
      component: HomePage,
    });
    this.router.addRoute({
      path: '/products',
      component: ProductsPage,
    });
    this.router.addRoute({
      path: '/products/:id',
      component: ProductDetailPage,
    });

    this.router.route();
  }
}

export default App;
