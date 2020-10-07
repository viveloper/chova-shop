import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';

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
            path: '/products/:id',
            Component: ProductPage,
          },
        ],
      },
      this.container
    );

    return this.container;
  }
}

export default App;
