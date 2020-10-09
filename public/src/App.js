import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import * as userApi from './api/user.js';
import { asyncHandler, asyncInitState } from './modules/asyncHandler.js';

class App extends Component {
  constructor(props) {
    super(props);

    const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const initCartItems = localCartItems ? localCartItems : [];

    const localUser = JSON.parse(localStorage.getItem('user'));
    const initUser = {
      ...asyncInitState,
      data: localUser,
    };

    this.state = {
      cart: {
        items: initCartItems,
        user: initUser,
      },
    };

    this.container = document.createElement('div');
  }

  login = async ({ email, password }) => {
    asyncHandler.setLoading.call(this, 'user');
    const { isError, data } = await userApi.login({ email, password });
    if (!isError) {
      asyncHandler.setData.call(this, 'user', data);
    } else {
      asyncHandler.setError.call(this, 'user', data);
    }

    localStorage.setItem('user', JSON.stringify(this.state.user.data));
  };

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

  editCartItemQty = (id, qty) => {
    this.setState({
      cart: {
        ...this.state.cart,
        items: this.state.cart.items.map((item) =>
          item._id === id ? { ...item, qty } : item
        ),
      },
    });

    localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
  };

  removeCartItem = (id) => {
    this.setState({
      cart: {
        ...this.state.cart,
        items: this.state.cart.items.filter((item) => item._id !== id),
      },
    });

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
            props: {
              cart,
              editCartItemQty: this.editCartItemQty,
              removeCartItem: this.removeCartItem,
            },
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
