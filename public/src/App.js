import Component from './components/Component.js';
import BrowserRouter from './components/BrowserRouter.js';
import HomePage from './components/HomePage.js';
import ProductsPage from './components/ProductsPage.js';
import ProductDetailPage from './components/ProductDetailPage.js';

class App extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'div',
        className: 'app',
      },
      props
    );

    this.render();
  }

  render() {
    this.el.innerHTML = '';

    new BrowserRouter(this.el, {
      routes: [
        {
          path: '/',
          Component: HomePage,
        },
        {
          path: '/products',
          Component: ProductsPage,
        },
        {
          path: '/products/:id',
          Component: ProductDetailPage,
          props: {
            data: 'myData',
          },
        },
      ],
    });
  }
}

export default App;
