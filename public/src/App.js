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
import PaymentPage from './pages/PaymentPage.js';
import PlaceOrderPage from './pages/PlaceOrderPage.js';
import OrderPage from './pages/OrderPage.js';
import AdminUsersPage from './pages/AdminUsersPage.js';
import AdminEditUserPage from './pages/AdminEditUserPage.js';
import AdminProductsPage from './pages/AdminProductsPage.js';
import AdminEditProductPage from './pages/AdminEditProductPage.js';
import AdminCreateProductPage from './pages/AdminCreateProductPage.js';
import AdminOrdersPage from './pages/AdminOrdersPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import * as usersApi from './api/users.js';
import * as ordersApi from './api/orders.js';
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

    const localShippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
    const initShippingAddress = localShippingAddress ? localShippingAddress : {address: '', city: '', postalCode: '', country: ''};

    const localPaymentMethod = JSON.parse(localStorage.getItem('paymentMethod'));
    const initPaymentMethod = localPaymentMethod ? localPaymentMethod : '';

    this.state = {      
      cart: { 
        items: initCartItems,
        shippingAddress: initShippingAddress,
        paymentMethod: initPaymentMethod,
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
      orderCreationInfo: asyncInitState,
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
    const { isError, data } = await usersApi.login({ email, password });
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
    const { isError, data } = await usersApi.register({ name, email, password });
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

  clearCartItems = () => {
    this.setState({
      cart: {
        ...this.state.cart,
        items: [],
      }
    });

    localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
  }

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
    const { isError, data } = await usersApi.updateUserProfile(token, { name, email, password });
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

  handleShippingAddressSubmit = ({address, city, postalCode, country}) => {   
    history.pushState({ path: '/payment' }, '', '/payment');
    
    this.setState({
      cart: {
        ...this.state.cart,
        shippingAddress: {
          address, 
          city, 
          postalCode, 
          country,
        }
      }
    });
    
    localStorage.setItem('shippingAddress', JSON.stringify(this.state.cart.shippingAddress));
  }

  handlePaymentSubmit = ({paymentMethod}) => {
    history.pushState({ path: '/placeorder' }, '', '/placeorder');

    this.setState({
      cart: {
        ...this.state.cart,
        paymentMethod,
      }
    });

    localStorage.setItem('paymentMethod', JSON.stringify(this.state.cart.paymentMethod));
  }

  createOrder = async (order) => {
    const { token } = this.state.user.data;
    asyncHandler.setLoading.call(this, 'orderCreationInfo');
    const { isError, data } = await ordersApi.createOrder(token, order);
    if (!isError) {
      asyncHandler.setData.call(this, 'orderCreationInfo', data);
      this.clearCartItems();
      this.push(`/orders/${data._id}`);
    } else {
      asyncHandler.setError.call(this, 'orderCreationInfo', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { 
      cart, 
      user, 
      loginInputs, 
      registerInputs, 
      orderCreationInfo,
    } = this.state;
    
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
            props: { 
              user,
              addCartItem: this.addCartItem,
            },
          },
          {
            path: '/cart',
            Component: CartPage,
            props: {
              items: cart.items,
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
              shippingAddress: cart.shippingAddress,
              onSubmit: this.handleShippingAddressSubmit,
            }            
          },
          {
            path: '/payment',
            Component: PaymentPage,
            props: {
              user,
              onSubmit: this.handlePaymentSubmit,
            }            
          },
          {
            path: '/placeorder',
            Component: PlaceOrderPage,
            props: {
              user,
              cart,
              orderCreationInfo, 
              onSubmit: this.createOrder,
            }            
          },
          {
            path: '/orders/:id',
            Component: OrderPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/users',
            Component: AdminUsersPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/user/:id/edit',
            Component: AdminEditUserPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/products',
            Component: AdminProductsPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/product/:id/edit',
            Component: AdminEditProductPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/product/create',
            Component: AdminCreateProductPage,
            props: {
              user,
            }
          },
          {
            path: '/admin/orders',
            Component: AdminOrdersPage,
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
