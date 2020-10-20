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
import SearchResultPage from './pages/SearchResultPage.js';
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
    const initUser = localUser;

    const localShippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
    const initShippingAddress = localShippingAddress ? localShippingAddress : {address: '', city: '', postalCode: '', country: ''};

    const localPaymentMethod = JSON.parse(localStorage.getItem('paymentMethod'));
    const initPaymentMethod = localPaymentMethod ? localPaymentMethod : '';

    this.state = {      
      path: location.pathname,
      cart: { 
        items: initCartItems,
        shippingAddress: initShippingAddress,
        paymentMethod: initPaymentMethod,
      },
      user: initUser,      
      orderCreationInfo: asyncInitState,
    };

    window.addEventListener('popstate', this.handlePopState);

    this.container = document.createElement('div');        
  }

  push = (path) => {    
    if (path === this.state.path) return;
    history.pushState({ path }, '', path);
    this.setState({ path });
  }

  goBack = () => {
    history.back();
  }

  handlePopState = (e) => {   
    this.setState({
      path: location.pathname,
    });
  }

  setUser = (user) => {
    this.setState({ user });
    localStorage.setItem('user', JSON.stringify(user));
  }  

  logout = () => {    
    this.push('/');
    this.setState({
      user: null,
    });
    localStorage.removeItem('user');
  };

  addCartItem = (product, qty) => {    
    this.push('/cart');

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

  editCartItemQty = (productId, qty) => {
    this.setState({
      cart: {
        ...this.state.cart,
        items: this.state.cart.items.map((item) =>
          item._id === productId ? { ...item, qty } : item
        ),
      },
    });

    localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
  };

  removeCartItem = (productId) => {
    this.setState({
      cart: {
        ...this.state.cart,
        items: this.state.cart.items.filter((item) => item._id !== productId),
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

  handleShippingAddressSubmit = ({address, city, postalCode, country}) => {       
    this.push('/payment');
    
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
    this.push('/placeorder');

    this.setState({
      cart: {
        ...this.state.cart,
        paymentMethod,
      }
    });

    localStorage.setItem('paymentMethod', JSON.stringify(this.state.cart.paymentMethod));
  }

  createOrder = async (order) => {
    const { token } = this.state.user;
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
      path,
      cart,
      user,
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
        path,
        history: {
          push: this.push,
          goBack: this.goBack,
        },
        routes: [
          {
            path: '/',
            Component: HomePage,            
          },
          {
            path: '/page/:pageNumber',
            Component: HomePage,
          },
          {
            path: '/products/:id',
            Component: ProductPage,
            props: { 
              user,
              onAddBtnClick: this.addCartItem,
            },
          },
          {
            path: '/cart',
            Component: CartPage,
            props: {
              items: cart.items,
              onCartItemQtySelect: this.editCartItemQty,
              onCartItemDeleteBtnClick: this.removeCartItem,              
            },
          },
          {
            path: '/login',
            Component: LoginPage,
            props: {
              user,
              setUser: this.setUser,
            },
          },
          {
            path: '/register',
            Component: RegisterPage,
            props: {
              user,
              setUser: this.setUser,
            },
          },
          {
            path: '/profile',
            Component: ProfilePage,
            props: {
              user,              
              setUser: this.setUser,
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
            path: '/admin/products/page/:pageNumber',
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
            path: '/search/:keyword',
            Component: SearchResultPage,
          },
          {
            path: '/search/:keyword/page/:pageNumber',
            Component: SearchResultPage,
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
