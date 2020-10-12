import { Component, renderComponent } from './modules/MyReact.js';
import BrowserRouter from './modules/BrowserRouter.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import ShippingPage from './pages/ShippingPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import * as userApi from './api/user.js';
import { asyncHandler, asyncInitState } from './modules/asyncHandler.js';
import ProfilePage from './pages/ProfilePage.js';

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

    window.addEventListener('popstate', this.handlePopState);
  }

  push = (path) => {    
    if (path === location.pathname) return;    
    history.pushState({ path }, '', path);
    this.render();
  }

  goBack = () => {
    history.back();
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
        ...this.state.user,
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

  updateUserProfile = async ({name, email, password}) => {
    const { token } = this.state.user.data;

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        loading: true,
        error: null,
      }
    })
    const { isError, data } = await userApi.updateUser(token, { name, email, password });
    if (!isError) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          loading: false,
          data,
        }
      })
    } else {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          loading: false,
          error: data,
        }
      })
    }

    localStorage.setItem('user', JSON.stringify(this.state.user.data));
  }

  render() {
    this.container.innerHTML = '';

    const { cart, user, loginInputs, registerInputs } = this.state;
    
    renderComponent(
      Header, 
      { 
        history: {
          push: this.push,
          goBack: this.goBack,
        }, 
        user, 
        logout: this.logout
      }, 
      this.container
    );        

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
            path: '/login',
            Component: LoginPage,
            props: {
              user,
              inputs: loginInputs,
              login: this.login,
              setError: this.setUserError,
              setInputs: this.setLoginInputs,              
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
            },
          },
          {
            path: '/profile',
            Component: ProfilePage,
            props: {
              user,
              onProfileSubmit: this.updateUserProfile,
              setError: this.setUserError,
            }
          },
          {
            path: '/shipping',
            Component: ShippingPage,
            props: {
              user,
            }            
          },
          {
            path: '*',
            Component: NotFoundPage,            
          },
        ],
      },
      this.container
    );

    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default App;
