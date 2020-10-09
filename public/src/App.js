import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
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
      },
      user: initUser,
      loginInputs: {
        email: '',
        password: '',
      },
      registerInputs: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };

    this.container = document.createElement('div');
  }

  login = async ({ email, password }) => {
    asyncHandler.setLoading.call(this, 'user');
    const { isError, data } = await userApi.login({ email, password });
    if (!isError) {
      asyncHandler.setData.call(this, 'user', data);
      this.setState({
        ...this.state,
        loginInputs: {
          email: '',
          password: '',
        },
      });
      history.back();
    } else {
      asyncHandler.setError.call(this, 'user', data);
    }

    localStorage.setItem('user', JSON.stringify(this.state.user.data));
  };

  logout = () => {
    history.pushState({ path: '/' }, '', '/');

    this.setState({
      ...this.state,
      user: asyncInitState,
    });
    localStorage.removeItem('user');
  };

  register = async ({ name, email, password }) => {
    asyncHandler.setLoading.call(this, 'user');
    const { isError, data } = await userApi.register({ name, email, password });
    if (!isError) {
      asyncHandler.setData.call(this, 'user', data);
      this.setState({
        ...this.state,
        registerInputs: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
      history.back();
    } else {
      asyncHandler.setError.call(this, 'user', data);
    }

    localStorage.setItem('user', JSON.stringify(this.state.user.data));
  };

  setLoginInputs = ({ email, password }) => {
    this.setState({
      ...this.state,
      loginInputs: {
        email,
        password,
      },
    });
  };

  setRegisterInputs = ({ name, email, password, confirmPassword }) => {
    this.setState({
      ...this.state,
      registerInputs: {
        name,
        email,
        password,
        confirmPassword,
      },
    });
  };

  setUserError = (message) => {
    this.setState({
      ...this.state,
      user: {
        ...asyncInitState,
        error: {
          message,
        },
      },
    });
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

    const { cart, user, loginInputs, registerInputs } = this.state;

    renderComponent(
      BrowserRouter,
      {
        routes: [
          {
            path: '/',
            Component: HomePage,
            props: { user, logout: this.logout },
          },
          {
            path: '/products/:id',
            Component: ProductPage,
            props: { addCartItem: this.addCartItem, user, logout: this.logout },
          },
          {
            path: '/cart',
            Component: CartPage,
            props: {
              cart,
              editCartItemQty: this.editCartItemQty,
              removeCartItem: this.removeCartItem,
              user,
              logout: this.logout,
            },
          },
          {
            path: '/login',
            Component: LoginPage,
            props: {
              user,
              inputs: loginInputs,
              login: this.login,
              setError: this.setUserError,
              setInputs: this.setLoginInputs,
              logout: this.logout,
            },
          },
          {
            path: '/register',
            Component: RegisterPage,
            props: {
              user,
              inputs: registerInputs,
              register: this.register,
              setError: this.setUserError,
              setInputs: this.setRegisterInputs,
              logout: this.logout,
            },
          },
          {
            path: '*',
            Component: NotFoundPage,
            props: { user, logout: this.logout },
          },
        ],
      },
      this.container
    );

    return this.container;
  }
}

export default App;
