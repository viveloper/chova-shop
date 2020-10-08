import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

class App extends Component {
  constructor(props) {
    super(props);

    let initCartItems = JSON.parse(localStorage.getItem('cartItems'));
    initCartItems = initCartItems ? initCartItems : [];

    this.state = {
      cart: {
        items: initCartItems,
      },
    };

    this.container = document.createElement('div');
  }

  addCartItem = (product, qty) => {
    history.pushState({ path: '/cart' }, '', '/cart');

    const existItem = this.state.cart.items.find(
      (item) => item._id === product._id
    );

    if (!existItem) {
      this.setState({
        cart: {
          ...this.state.cart,
          items: [...this.state.cart.items, { ...product, qty }],
        },
      });
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          items: this.state.cart.items.map((item) =>
            item._id === product._id ? { ...product, qty } : item
          ),
        },
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
  };

  render() {
    this.container.innerHTML = '';

    const { cart } = this.state;

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
            props: { addCartItem: this.addCartItem },
          },
          {
            path: '/cart',
            Component: CartPage,
            props: { cart },
          },
          {
            path: '*',
            Component: NotFoundPage,
          },
        ],
      },
      this.container
    );

    return this.container;
  }
}

export default App;
