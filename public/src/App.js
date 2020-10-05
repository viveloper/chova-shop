import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import HomePage from './pages/HomePage.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    renderComponent(
      BrowserRouter,
      {
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
      },
      this.container
    );

    return this.container;
  }
}

export default App;
