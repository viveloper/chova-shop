/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/App.js":
/*!*****************************!*\
  !*** ./frontend/src/App.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _modules_BrowserRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/BrowserRouter.js */ "./frontend/src/modules/BrowserRouter.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.js */ "./frontend/src/components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer.js */ "./frontend/src/components/Footer.js");
/* harmony import */ var _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage.js */ "./frontend/src/pages/HomePage.js");
/* harmony import */ var _pages_ProductPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProductPage.js */ "./frontend/src/pages/ProductPage.js");
/* harmony import */ var _pages_CartPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/CartPage.js */ "./frontend/src/pages/CartPage.js");
/* harmony import */ var _pages_LoginPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/LoginPage.js */ "./frontend/src/pages/LoginPage.js");
/* harmony import */ var _pages_RegisterPage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/RegisterPage.js */ "./frontend/src/pages/RegisterPage.js");
/* harmony import */ var _pages_ShippingPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ShippingPage.js */ "./frontend/src/pages/ShippingPage.js");
/* harmony import */ var _pages_PaymentPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/PaymentPage.js */ "./frontend/src/pages/PaymentPage.js");
/* harmony import */ var _pages_PlaceOrderPage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/PlaceOrderPage.js */ "./frontend/src/pages/PlaceOrderPage.js");
/* harmony import */ var _pages_OrderPage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/OrderPage.js */ "./frontend/src/pages/OrderPage.js");
/* harmony import */ var _pages_AdminUsersPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/AdminUsersPage.js */ "./frontend/src/pages/AdminUsersPage.js");
/* harmony import */ var _pages_AdminEditUserPage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/AdminEditUserPage.js */ "./frontend/src/pages/AdminEditUserPage.js");
/* harmony import */ var _pages_AdminProductsPage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/AdminProductsPage.js */ "./frontend/src/pages/AdminProductsPage.js");
/* harmony import */ var _pages_AdminEditProductPage_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/AdminEditProductPage.js */ "./frontend/src/pages/AdminEditProductPage.js");
/* harmony import */ var _pages_AdminCreateProductPage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/AdminCreateProductPage.js */ "./frontend/src/pages/AdminCreateProductPage.js");
/* harmony import */ var _pages_AdminOrdersPage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/AdminOrdersPage.js */ "./frontend/src/pages/AdminOrdersPage.js");
/* harmony import */ var _pages_SearchResultPage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/SearchResultPage.js */ "./frontend/src/pages/SearchResultPage.js");
/* harmony import */ var _pages_NotFoundPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/NotFoundPage.js */ "./frontend/src/pages/NotFoundPage.js");
/* harmony import */ var _api_orders_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api/orders.js */ "./frontend/src/api/orders.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
/* harmony import */ var _pages_ProfilePage_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/ProfilePage.js */ "./frontend/src/pages/ProfilePage.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























class App extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_23__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "push", path => {
      if (path === this.state.path) return;
      history.pushState({
        path
      }, '', path);
      this.setState({
        path
      });
    });

    _defineProperty(this, "goBack", () => {
      history.back();
    });

    _defineProperty(this, "handlePopState", e => {
      this.setState({
        path: location.pathname
      });
    });

    _defineProperty(this, "setUser", user => {
      this.setState({
        user
      });
      localStorage.setItem('user', JSON.stringify(user));
    });

    _defineProperty(this, "logout", () => {
      this.push('/');
      this.setState({
        user: null
      });
      localStorage.removeItem('user');
    });

    _defineProperty(this, "addCartItem", (product, qty) => {
      this.push('/cart');
      const existItem = this.state.cart.items.find(item => item._id === product._id);

      if (!existItem) {
        this.setState({
          cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
            items: [...this.state.cart.items, _objectSpread(_objectSpread({}, product), {}, {
              qty
            })]
          })
        });
      } else {
        this.setState({
          cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
            items: this.state.cart.items.map(item => item._id === product._id ? _objectSpread(_objectSpread({}, product), {}, {
              qty
            }) : item)
          })
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
    });

    _defineProperty(this, "editCartItemQty", (productId, qty) => {
      this.setState({
        cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
          items: this.state.cart.items.map(item => item._id === productId ? _objectSpread(_objectSpread({}, item), {}, {
            qty
          }) : item)
        })
      });
      localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
    });

    _defineProperty(this, "removeCartItem", productId => {
      this.setState({
        cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
          items: this.state.cart.items.filter(item => item._id !== productId)
        })
      });
      localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
    });

    _defineProperty(this, "clearCartItems", () => {
      this.setState({
        cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
          items: []
        })
      });
      localStorage.setItem('cartItems', JSON.stringify(this.state.cart.items));
    });

    _defineProperty(this, "handleShippingAddressSubmit", ({
      address,
      city,
      postalCode,
      country
    }) => {
      this.push('/payment');
      this.setState({
        cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
          shippingAddress: {
            address,
            city,
            postalCode,
            country
          }
        })
      });
      localStorage.setItem('shippingAddress', JSON.stringify(this.state.cart.shippingAddress));
    });

    _defineProperty(this, "handlePaymentSubmit", ({
      paymentMethod
    }) => {
      this.push('/placeorder');
      this.setState({
        cart: _objectSpread(_objectSpread({}, this.state.cart), {}, {
          paymentMethod
        })
      });
      localStorage.setItem('paymentMethod', JSON.stringify(this.state.cart.paymentMethod));
    });

    _defineProperty(this, "createOrder", async order => {
      const {
        token
      } = this.state.user;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_21__.asyncHandler.setLoading.call(this, 'orderCreationInfo');
      const {
        isError,
        data
      } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_20__.createOrder(token, order);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_21__.asyncHandler.setData.call(this, 'orderCreationInfo', data);
        this.clearCartItems();
        this.push(`/orders/${data._id}`);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_21__.asyncHandler.setError.call(this, 'orderCreationInfo', data);
      }
    });

    const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const initCartItems = localCartItems ? localCartItems : [];
    const localUser = JSON.parse(localStorage.getItem('user'));
    const initUser = localUser;
    const localShippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
    const initShippingAddress = localShippingAddress ? localShippingAddress : {
      address: '',
      city: '',
      postalCode: '',
      country: ''
    };
    const localPaymentMethod = JSON.parse(localStorage.getItem('paymentMethod'));
    const initPaymentMethod = localPaymentMethod ? localPaymentMethod : '';
    this.state = {
      path: location.pathname,
      cart: {
        items: initCartItems,
        shippingAddress: initShippingAddress,
        paymentMethod: initPaymentMethod
      },
      user: initUser,
      orderCreationInfo: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_21__.asyncInitState
    };
    this.container = document.createElement('div');
    window.addEventListener('popstate', this.handlePopState);
  }

  render() {
    this.container.innerHTML = '';
    const {
      path,
      cart,
      user,
      orderCreationInfo
    } = this.state;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_23__.renderComponent)(_components_Header_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history: {
        push: this.push,
        goBack: this.goBack
      },
      user,
      logout: this.logout
    }, this.container);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_23__.renderComponent)(_modules_BrowserRouter_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      path,
      history: {
        push: this.push,
        goBack: this.goBack
      },
      routes: [{
        path: '/',
        Component: _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_3__.default
      }, {
        path: '/page/:pageNumber',
        Component: _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_3__.default
      }, {
        path: '/products/:id',
        Component: _pages_ProductPage_js__WEBPACK_IMPORTED_MODULE_4__.default,
        props: {
          user,
          onAddBtnClick: this.addCartItem
        }
      }, {
        path: '/cart',
        Component: _pages_CartPage_js__WEBPACK_IMPORTED_MODULE_5__.default,
        props: {
          items: cart.items,
          onCartItemQtySelect: this.editCartItemQty,
          onCartItemDeleteBtnClick: this.removeCartItem
        }
      }, {
        path: '/login',
        Component: _pages_LoginPage_js__WEBPACK_IMPORTED_MODULE_6__.default,
        props: {
          user,
          setUser: this.setUser
        }
      }, {
        path: '/register',
        Component: _pages_RegisterPage_js__WEBPACK_IMPORTED_MODULE_7__.default,
        props: {
          user,
          setUser: this.setUser
        }
      }, {
        path: '/profile',
        Component: _pages_ProfilePage_js__WEBPACK_IMPORTED_MODULE_22__.default,
        props: {
          user,
          setUser: this.setUser
        }
      }, {
        path: '/shipping',
        Component: _pages_ShippingPage_js__WEBPACK_IMPORTED_MODULE_8__.default,
        props: {
          user,
          shippingAddress: cart.shippingAddress,
          onSubmit: this.handleShippingAddressSubmit
        }
      }, {
        path: '/payment',
        Component: _pages_PaymentPage_js__WEBPACK_IMPORTED_MODULE_9__.default,
        props: {
          user,
          onSubmit: this.handlePaymentSubmit
        }
      }, {
        path: '/placeorder',
        Component: _pages_PlaceOrderPage_js__WEBPACK_IMPORTED_MODULE_10__.default,
        props: {
          user,
          cart,
          orderCreationInfo,
          onSubmit: this.createOrder
        }
      }, {
        path: '/orders/:id',
        Component: _pages_OrderPage_js__WEBPACK_IMPORTED_MODULE_11__.default,
        props: {
          user
        }
      }, {
        path: '/admin/users',
        Component: _pages_AdminUsersPage_js__WEBPACK_IMPORTED_MODULE_12__.default,
        props: {
          user
        }
      }, {
        path: '/admin/user/:id/edit',
        Component: _pages_AdminEditUserPage_js__WEBPACK_IMPORTED_MODULE_13__.default,
        props: {
          user
        }
      }, {
        path: '/admin/products',
        Component: _pages_AdminProductsPage_js__WEBPACK_IMPORTED_MODULE_14__.default,
        props: {
          user
        }
      }, {
        path: '/admin/products/page/:pageNumber',
        Component: _pages_AdminProductsPage_js__WEBPACK_IMPORTED_MODULE_14__.default,
        props: {
          user
        }
      }, {
        path: '/admin/product/:id/edit',
        Component: _pages_AdminEditProductPage_js__WEBPACK_IMPORTED_MODULE_15__.default,
        props: {
          user
        }
      }, {
        path: '/admin/product/create',
        Component: _pages_AdminCreateProductPage_js__WEBPACK_IMPORTED_MODULE_16__.default,
        props: {
          user
        }
      }, {
        path: '/admin/orders',
        Component: _pages_AdminOrdersPage_js__WEBPACK_IMPORTED_MODULE_17__.default,
        props: {
          user
        }
      }, {
        path: '/search/:keyword',
        Component: _pages_SearchResultPage_js__WEBPACK_IMPORTED_MODULE_18__.default
      }, {
        path: '/search/:keyword/page/:pageNumber',
        Component: _pages_SearchResultPage_js__WEBPACK_IMPORTED_MODULE_18__.default
      }, {
        path: '*',
        Component: _pages_NotFoundPage_js__WEBPACK_IMPORTED_MODULE_19__.default
      }]
    }, this.container);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_23__.renderComponent)(_components_Footer_js__WEBPACK_IMPORTED_MODULE_2__.default, null, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./frontend/src/api/orders.js":
/*!************************************!*\
  !*** ./frontend/src/api/orders.js ***!
  \************************************/
/*! namespace exports */
/*! export createOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchMyOrders [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchOrders [provided] [no usage info] [missing usage info prevents renaming] */
/*! export markDeliveredOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! export payOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrder": () => /* binding */ createOrder,
/* harmony export */   "fetchOrder": () => /* binding */ fetchOrder,
/* harmony export */   "payOrder": () => /* binding */ payOrder,
/* harmony export */   "markDeliveredOrder": () => /* binding */ markDeliveredOrder,
/* harmony export */   "fetchMyOrders": () => /* binding */ fetchMyOrders,
/* harmony export */   "fetchOrders": () => /* binding */ fetchOrders
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./frontend/src/api/request.js");

const createOrder = async (token, order) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders`, 'POST', order, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchOrder = async (token, id) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders/${id}`, 'GET', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const payOrder = async (token, payInfo) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders/${payInfo.id}/pay`, 'PUT', payInfo, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const markDeliveredOrder = async (token, id) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders/${id}/deliver`, 'PUT', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchMyOrders = async token => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders/myorders`, 'GET', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchOrders = async token => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/orders`, 'GET', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};

/***/ }),

/***/ "./frontend/src/api/products.js":
/*!**************************************!*\
  !*** ./frontend/src/api/products.js ***!
  \**************************************/
/*! namespace exports */
/*! export createProduct [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createProductReview [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deleteProduct [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchProduct [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchProducts [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateProduct [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProducts": () => /* binding */ fetchProducts,
/* harmony export */   "fetchProduct": () => /* binding */ fetchProduct,
/* harmony export */   "deleteProduct": () => /* binding */ deleteProduct,
/* harmony export */   "updateProduct": () => /* binding */ updateProduct,
/* harmony export */   "createProduct": () => /* binding */ createProduct,
/* harmony export */   "createProductReview": () => /* binding */ createProductReview
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./frontend/src/api/request.js");

const fetchProducts = async (keyword = '', pageNumber = '') => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchProduct = async id => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products/${id}`);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const deleteProduct = async (token, {
  id
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products/${id}`, 'DELETE', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const updateProduct = async (token, product) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products/${product.id}`, 'PUT', product, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const createProduct = async (token, product) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products`, 'POST', product, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const createProductReview = async (token, {
  productId,
  review
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/products/${productId}/reviews`, 'POST', review, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};

/***/ }),

/***/ "./frontend/src/api/request.js":
/*!*************************************!*\
  !*** ./frontend/src/api/request.js ***!
  \*************************************/
/*! namespace exports */
/*! export request [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": () => /* binding */ request
/* harmony export */ });
const request = async (url, method = 'GET', data, token) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': method === 'POST' || method === 'PUT' ? 'application/json' : undefined,
        Authorization: token ? `Bearer ${token}` : undefined
      },
      body: data ? JSON.stringify(data) : undefined
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      throw new Error((error === null || error === void 0 ? void 0 : error.message) ? error.message : response.statusText);
    }
  } catch (e) {
    throw e;
  }
};

/***/ }),

/***/ "./frontend/src/api/upload.js":
/*!************************************!*\
  !*** ./frontend/src/api/upload.js ***!
  \************************************/
/*! namespace exports */
/*! export uploadImage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadImage": () => /* binding */ uploadImage
/* harmony export */ });
const uploadImage = async (file, token) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(`/api/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    if (response.ok) {
      const data = await response.text();
      return {
        isError: false,
        data
      };
    } else {
      const error = await response.json();
      return {
        isError: true,
        data: new Error((error === null || error === void 0 ? void 0 : error.message) ? error.message : response.statusText)
      };
    }
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};

/***/ }),

/***/ "./frontend/src/api/users.js":
/*!***********************************!*\
  !*** ./frontend/src/api/users.js ***!
  \***********************************/
/*! namespace exports */
/*! export deleteUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchUsers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login [provided] [no usage info] [missing usage info prevents renaming] */
/*! export register [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateUserProfile [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => /* binding */ login,
/* harmony export */   "register": () => /* binding */ register,
/* harmony export */   "updateUserProfile": () => /* binding */ updateUserProfile,
/* harmony export */   "fetchUsers": () => /* binding */ fetchUsers,
/* harmony export */   "deleteUser": () => /* binding */ deleteUser,
/* harmony export */   "updateUser": () => /* binding */ updateUser,
/* harmony export */   "fetchUser": () => /* binding */ fetchUser
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./frontend/src/api/request.js");

const login = async ({
  email,
  password
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users/login`, 'POST', {
      email,
      password
    });
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const register = async ({
  name,
  email,
  password
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users`, 'POST', {
      name,
      email,
      password
    });
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const updateUserProfile = async (token, {
  name,
  email,
  password
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users/profile`, 'PUT', {
      name,
      email,
      password
    }, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchUsers = async token => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users`, 'GET', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const deleteUser = async (token, {
  id
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users/${id}`, 'DELETE', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const updateUser = async (token, {
  id,
  name,
  email,
  isAdmin
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users/${id}`, 'PUT', {
      id,
      name,
      email,
      isAdmin
    }, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};
const fetchUser = async (token, {
  id
}) => {
  try {
    const result = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/api/users/${id}`, 'GET', null, token);
    return {
      isError: false,
      data: result
    };
  } catch (e) {
    return {
      isError: true,
      data: e
    };
  }
};

/***/ }),

/***/ "./frontend/src/components/AdminEditUser/AdminEditUser.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/AdminEditUser/AdminEditUser.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.js */ "./frontend/src/components/AdminEditUser/UserForm.js");




class AdminEditUser extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      inputs,
      loading,
      formError,
      error,
      onSubmit
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const btnGoBack = document.createElement('span');
    btnGoBack.className = 'btn btn-light my-3';
    btnGoBack.innerText = 'Go Back';
    btnGoBack.addEventListener('click', () => history.goBack());
    container.appendChild(btnGoBack);
    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    const title = document.createElement('h1');
    title.innerText = 'Edit User';
    col.appendChild(title);

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, col);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      col.appendChild(errorEl);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_UserForm_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      inputs,
      error: formError,
      onSubmit
    }, col);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditUser);

/***/ }),

/***/ "./frontend/src/components/AdminEditUser/UserForm.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/AdminEditUser/UserForm.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/inputValidator.js */ "./frontend/src/modules/inputValidator.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class UserForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const name = e.target.querySelector('input[id=name]').value;
      const email = e.target.querySelector('input[id=email]').value;
      const isAdmin = e.target.querySelector('input[id=isadmin]').checked;
      const inputs = {
        name,
        email,
        isAdmin
      };

      if (!name) {
        this.setState({
          inputs,
          error: {
            message: 'Name is requried'
          }
        });
        return;
      }

      if (!email) {
        this.setState({
          inputs,
          error: {
            message: 'Email is requried'
          }
        });
        return;
      }

      if (!(0,_modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(email)) {
        this.setState({
          inputs,
          error: {
            message: 'Email is not valid'
          }
        });
        return;
      }

      this.props.onSubmit(inputs);
    });

    this.state = {
      inputs: {
        name: props.inputs.name,
        email: props.inputs.email,
        isAdmin: props.inputs.isAdmin
      },
      error: props.error
    };
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      inputs,
      error
    } = this.state;
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error.message : '';
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${inputs.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${inputs.email}">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" id="isadmin" class="form-check-input"${inputs.isAdmin ? ' checked' : ''}>
          <label title="" for="isadmin" class="form-check-label">Is Admin</label>
        </div>
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserForm);

/***/ }),

/***/ "./frontend/src/components/AdminOrders/AdminOrders.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/AdminOrders/AdminOrders.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _OrdersTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersTable.js */ "./frontend/src/components/AdminOrders/OrdersTable.js");




class AdminOrders extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const title = document.createElement('h1');
    title.innerText = 'Orders';
    container.appendChild(title);
    const {
      orders: {
        loading,
        data,
        error
      },
      history
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_OrdersTable_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      data
    }, container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminOrders);

/***/ }),

/***/ "./frontend/src/components/AdminOrders/OrdersTable.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/AdminOrders/OrdersTable.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrdersTable extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'a') {
        const path = e.target.getAttribute('href');
        this.props.history.push(path);
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      data
    } = this.props;
    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${data.map(order => `
            <tr>
              <td>${order._id}</td>
              <td>${order.user.name}</td>
              <td>${new Date(order.createdAt).toLocaleDateString()}</td>
              <td>$${order.totalPrice}</td>
              <td>${order.isPaid ? new Date(order.paidAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td>${order.isDelivered ? new Date(order.deliveredAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td><a href="/orders/${order._id}" class="btn-sm btn btn-light">Details</a></td>
            </tr>
          `).join('')}                   
        </tbody>
      </table>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersTable);

/***/ }),

/***/ "./frontend/src/components/AdminProduct/AdminProduct.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/AdminProduct/AdminProduct.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _ProductForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductForm.js */ "./frontend/src/components/ProductForm.js");




class AdminProduct extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      type,
      history,
      product: {
        loading,
        data,
        error
      },
      uploadState,
      inputs,
      inputsError,
      onSubmit,
      onImageSelect
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const btnGoBack = document.createElement('span');
    btnGoBack.className = 'btn btn-light my-3';
    btnGoBack.innerText = 'Go Back';
    btnGoBack.addEventListener('click', () => history.goBack());
    container.appendChild(btnGoBack);
    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    const title = document.createElement('h1');
    title.innerText = type === 'edit' ? 'Edit Product' : 'Create Product';
    col.appendChild(title);

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, col);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      col.appendChild(errorEl);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_ProductForm_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      inputs,
      error: inputsError,
      uploadState,
      btnText: type === 'edit' ? 'Update' : 'Create',
      onSubmit,
      onImageSelect
    }, col);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProduct);

/***/ }),

/***/ "./frontend/src/components/AdminProducts/AdminProducts.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/AdminProducts/AdminProducts.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _ProductsTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsTitle.js */ "./frontend/src/components/AdminProducts/ProductsTitle.js");
/* harmony import */ var _ProductsTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsTable.js */ "./frontend/src/components/AdminProducts/ProductsTable.js");
/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pagination.js */ "./frontend/src/components/Pagination.js");






class AdminProducts extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const {
      productsInfo: {
        loading,
        data,
        error
      },
      history,
      onDelete,
      onProductPageClick,
      onProductPrevPageClick,
      onProductNextPageClick
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__.renderComponent)(_ProductsTitle_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history
    }, container);

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    const {
      products,
      page,
      pages
    } = data;

    if (products.length === 0) {
      const noResultAlert = document.createElement('div');
      noResultAlert.className = 'alert alert-light';
      noResultAlert.innerText = 'No Results';
      container.appendChild(noResultAlert);
    } else {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__.renderComponent)(_ProductsTable_js__WEBPACK_IMPORTED_MODULE_2__.default, {
        history,
        products,
        onDelete
      }, container);
    }

    if (pages > 1) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_4__.renderComponent)(_Pagination_js__WEBPACK_IMPORTED_MODULE_3__.default, {
        page,
        pages,
        pagesMargin: 3,
        onPageClick: onProductPageClick,
        onPrevClick: onProductPrevPageClick,
        onNextClick: onProductNextPageClick,
        history
      }, container);
    }

    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProducts);

/***/ }),

/***/ "./frontend/src/components/AdminProducts/ProductsTable.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/AdminProducts/ProductsTable.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProductsTable extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.dataset.name === 'move-product-edit') {
        const path = e.target.dataset.href;
        this.props.history.push(path);
        return;
      }

      if (e.target.dataset.name === 'delete-product') {
        const productId = e.target.dataset.id;
        if (!window.confirm('are you sure?')) return;
        this.props.onDelete(productId);
        return;
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const {
      products
    } = this.props;
    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${products.map(product => `
            <tr>
              <td>${product._id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
                <a href="/admin/product/${product._id}/edit" class="btn-sm btn btn-light" data-name="move-product-edit" data-href="/admin/product/${product._id}/edit">
                  <i class="fas fa-edit" data-name="move-product-edit" data-href="/admin/product/${product._id}/edit"></i>
                </a>
                <button type="button" class="btn-sm btn btn-danger" data-name="delete-product" data-id="${product._id}">
                  <i class="fas fa-trash" data-name="delete-product" data-id="${product._id}"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTable);

/***/ }),

/***/ "./frontend/src/components/AdminProducts/ProductsTitle.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/AdminProducts/ProductsTitle.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProductsTitle extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.name === 'create-product') {
        this.props.history.push('/admin/product/create');
        return;
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'align-items-center row';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = `
      <div class="col">
        <h1>Products</h1>
      </div>
      <div class="text-right col">
        <button type="button" class="my-3 btn btn-primary" data-name="create-product">
          <i class="fas fa-plus" data-name="create-product"></i> Create Product
        </button>
      </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsTitle);

/***/ }),

/***/ "./frontend/src/components/AdminUsers/AdminUsers.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/AdminUsers/AdminUsers.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _UsersTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersTable.js */ "./frontend/src/components/AdminUsers/UsersTable.js");




class AdminUsers extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const title = document.createElement('h1');
    title.innerText = 'Users';
    container.appendChild(title);
    const {
      users: {
        loading,
        data,
        error
      },
      history,
      onUserDelete
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_UsersTable_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      data,
      onUserDelete
    }, container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminUsers);

/***/ }),

/***/ "./frontend/src/components/AdminUsers/UsersTable.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/AdminUsers/UsersTable.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UsersTable extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.name === 'mailto') return;
      e.preventDefault();

      if (e.target.dataset.name === 'move-user-edit') {
        const path = e.target.dataset.href;
        this.props.history.push(path);
        return;
      }

      if (e.target.dataset.name === 'delete-user') {
        const userId = e.target.dataset.id;
        if (!window.confirm('are you sure?')) return;
        this.props.onUserDelete(userId);
        return;
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const {
      data
    } = this.props;
    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${data.map(user => `
            <tr>
              <td>${user._id}</td>
              <td>${user.name}</td>
              <td><a href="mailto:${user.email}" data-name="mailto">${user.email}</a></td>
              <td>
              ${user.isAdmin ? `
                <i class="fas fa-check" style="color: green;"></i>
                ` : `
                <i class="fas fa-times" style="color: red;"></i>
                `}
              </td>
              <td>
                <a href="/admin/user/${user._id}/edit" class="btn-sm btn btn-light" data-name="move-user-edit" data-href="/admin/user/${user._id}/edit">
                  <i class="fas fa-edit" data-name="move-user-edit" data-href="/admin/user/${user._id}/edit"></i>
                </a>
                <button type="button" class="btn-sm btn btn-danger" id="btn-delete-user" data-name="delete-user" data-id="${user._id}">
                  <i class="fas fa-trash" data-name="delete-user" data-id="${user._id}"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

/***/ }),

/***/ "./frontend/src/components/Cart/Cart.js":
/*!**********************************************!*\
  !*** ./frontend/src/components/Cart/Cart.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _CartItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItems.js */ "./frontend/src/components/Cart/CartItems.js");
/* harmony import */ var _CheckoutCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutCard.js */ "./frontend/src/components/Cart/CheckoutCard.js");




class Cart extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      cartItems,
      totalItems,
      totalPrice,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const title = document.createElement('h1');
    title.innerText = 'Shopping Cart';
    container.appendChild(title);
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    const cartItemsCol = document.createElement('div');
    cartItemsCol.className = 'col-md-8';
    row.appendChild(cartItemsCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_CartItems_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      items: cartItems,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick
    }, cartItemsCol);
    const checkoutCol = document.createElement('div');
    checkoutCol.className = 'col-md-4';
    row.appendChild(checkoutCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_CheckoutCard_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      totalItems,
      totalPrice
    }, checkoutCol);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./frontend/src/components/Cart/CartItems.js":
/*!***************************************************!*\
  !*** ./frontend/src/components/Cart/CartItems.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CartItems extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleInput", e => {
      if (e.target.dataset.oninput === 'edit-qty') {
        const productId = e.target.dataset.itemId;
        const qty = Number(e.target.value);
        this.props.onCartItemQtySelect(productId, qty);
      }
    });

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.onclick === 'link-product') {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        this.props.history.push(path);
        return;
      }

      if (e.target.dataset.onclick === 'delete-item') {
        const productId = e.target.dataset.itemId;
        this.props.onCartItemDeleteBtnClick(productId);
        return;
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
    this.container.addEventListener('input', this.handleInput);
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      items
    } = this.props;

    if (items.length === 0) {
      this.container.innerHTML = `
        <div role="alert" class="fade alert alert-info show">Your cart is empty</div>
      `;
      return this.container;
    }

    this.container.innerHTML = items.map(({
      _id,
      name,
      image,
      price,
      qty,
      countInStock
    }) => `
          <div class="list-group-item">
            <div class="row">
              <div class="col-md-2">
                <img src="${image}" alt="${name}" class="img-fluid rounded">
              </div>
              <div class="col-md-3">
                <a href="/products/${_id}" data-onclick="link-product">${name}</a>
              </div>
              <div class="col-md-2">$${price}</div>
              <div class="col-md-2">
                <select class="form-control" data-oninput="edit-qty" data-item-id="${_id}">
                ${Array(countInStock).fill('').map((_, idx) => `
                  <option value="${idx + 1}" ${idx + 1 === qty ? 'selected' : ''}>${idx + 1}</option>
                  `).join('')}
                </select>
              </div>
              <div class="col-md-2">
                <button type="button" class="btn btn-light" data-onclick="delete-item" data-item-id="${_id}">
                  <i class="fas fa-trash" data-onclick="delete-item" data-item-id="${_id}"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('');
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItems);

/***/ }),

/***/ "./frontend/src/components/Cart/CheckoutCard.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Cart/CheckoutCard.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CheckoutCard extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.onclick === 'link-shipping') {
        this.props.history.push('/shipping');
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      totalItems,
      totalPrice
    } = this.props;
    this.container.innerHTML = `
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h2>Subtotal (${totalItems}) items</h2>
          $${totalPrice}
        </div>
        <div class="list-group-item">
          <button ${totalItems === 0 ? 'disabled' : ''} type="button" class="btn-block btn btn-primary" data-onclick="link-shipping">Proceed To Checkout</button>
        </div>
      </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutCard);

/***/ }),

/***/ "./frontend/src/components/Footer.js":
/*!*******************************************!*\
  !*** ./frontend/src/components/Footer.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");


class Footer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('footer');
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    const content = document.createElement('div');
    content.className = 'text-center py-3 col';
    content.innerHTML = 'Copyright &copy; ChovaShop';
    container.appendChild(content);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./frontend/src/components/Header.js":
/*!*******************************************!*\
  !*** ./frontend/src/components/Header.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Header extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.onclick === 'link') {
        e.preventDefault();
        const path = e.target.dataset.href;
        this.props.history.push(path);
        return;
      }

      if (e.target.dataset.onclick === 'toggle-navbar') {
        this.toggleCollaped();
        return;
      }

      if (e.target.dataset.onclick === 'dropdown-usermenu') {
        e.preventDefault();
        this.toggleDropdownUserMenu();
        return;
      }

      if (e.target.dataset.onclick === 'dropdown-adminmenu') {
        e.preventDefault();
        this.toggleDropdownAmdinMenu();
        return;
      }

      if (e.target.dataset.onclick === 'logout') {
        e.preventDefault();
        this.props.logout();
        return;
      }
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (e.target.dataset.onsubmit === 'search') {
        const keyword = e.target.querySelector('input[name=q]').value;
        if (!keyword) return;
        this.props.history.push(`/search/${keyword}`);
      }
    });

    _defineProperty(this, "toggleCollaped", () => {
      this.setState({
        isCollapsed: !this.state.isCollapsed
      });
    });

    _defineProperty(this, "toggleDropdownUserMenu", () => {
      this.setState({
        isDropdownUserMenu: !this.state.isDropdownUserMenu
      });
    });

    _defineProperty(this, "toggleDropdownAmdinMenu", () => {
      this.setState({
        isDropdownAdminMenu: !this.state.isDropdownAdminMenu
      });
    });

    this.state = {
      isCollapsed: true,
      isDropdownUserMenu: false,
      isDropdownAdminMenu: false
    };
    this.container = document.createElement('header');
    this.container.className = 'header';
    this.container.addEventListener('click', this.handleClick);
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      user
    } = this.props;
    const {
      isCollapsed,
      isDropdownUserMenu,
      isDropdownAdminMenu
    } = this.state;
    this.container.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="active navbar-brand" href="/" data-onclick="link" data-href="/">ChovaShop</a>
          <button class="navbar-toggler${isCollapsed ? ' collapsed' : ''}" type="button" aria-controls="basic-navbar-nav" aria-label="Toggle navigation" data-onclick="toggle-navbar">
            <span class="navbar-toggler-icon" data-onclick="toggle-navbar"></span>
          </button>
          <div class="navbar-collapse collapse${isCollapsed ? '' : ' show'}" id="basic-navbar-nav">
            <form class="form-inline" data-onsubmit="search">
              <input class="mr-sm-2 ml-sm-5 form-control" type="text" placeholder="Search Products..." name="q">
              <button class="p-2 btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="ml-auto navbar-nav">
              <a class="nav-link active" href="/cart" data-rb-event-key="/cart" data-onclick="link" data-href="/cart">
                <i class="fas fa-shopping-cart" data-onclick="link" data-href="/cart"></i> Cart
              </a>
              ${!user ? `
                <a class="nav-link" href="/login" data-rb-event-key="/login" data-onclick="link" data-href="/login">
                  <i class="fas fa-user" data-onclick="link" data-href="/login"></i> Sign In
                </a>
                ` : `
                <div class="dropdown nav-item${isDropdownUserMenu ? ' show' : ''}">
                  <a class="dropdown-toggle nav-link" id="username" href="#" role="button" aria-haspopup="true" aria-expanded="${isDropdownUserMenu}" data-onclick="dropdown-usermenu">${user.name}</a>
                  <div class="dropdown-menu${isDropdownUserMenu ? ' show' : ''}" aria-labelledby="username" style="margin: 0px;">
                    <a class="dropdown-item" href="/profile" data-onclick="link" data-href="/profile">Profile</a>
                    <a class="dropdown-item" id="btnLogout" role="button" href="#" data-onclick="logout">Logout</a>
                  </div>
                </div>
                ${user.isAdmin ? `
                <div class="dropdown nav-item${isDropdownAdminMenu ? ' show' : ''}">
                  <a class="dropdown-toggle nav-link" id="adminmenu" href="#" role="button" aria-haspopup="true" aria-expanded="${isDropdownAdminMenu}" data-onclick="dropdown-adminmenu">Admin</a>
                  <div class="dropdown-menu${isDropdownAdminMenu ? ' show' : ''}" aria-labelledby="adminmenu" style="margin: 0px;">
                    <a class="dropdown-item" href="/admin/users" data-onclick="link" data-href="/admin/users">Users</a>
                    <a class="dropdown-item" href="/admin/products" data-onclick="link" data-href="/admin/products">Products</a>
                    <a class="dropdown-item" href="/admin/orders" data-onclick="link" data-href="/admin/orders">Orders</a>
                  </div>
                </div>
                ` : ``}
                `}
            </div>
          </div>
        </div>
      </nav>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./frontend/src/components/Home/Home.js":
/*!**********************************************!*\
  !*** ./frontend/src/components/Home/Home.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _ProductCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductCard.js */ "./frontend/src/components/ProductCard.js");
/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pagination.js */ "./frontend/src/components/Pagination.js");





class Home extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const title = document.createElement('h1');
    title.innerText = 'Latest Products';
    container.appendChild(title);
    const {
      productsInfo: {
        loading,
        data,
        error
      },
      onProductPageClick,
      onProductPrevPageClick,
      onProductNextPageClick,
      history
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    const {
      products,
      page,
      pages
    } = data;
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    products.forEach(product => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      row.appendChild(col);
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_ProductCard_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        product,
        history
      }, col);
    });

    if (products.length === 0) {
      const noResultAlert = document.createElement('div');
      noResultAlert.className = 'alert alert-light';
      noResultAlert.innerText = 'No Results';
      row.appendChild(noResultAlert);
    }

    if (pages > 1) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_Pagination_js__WEBPACK_IMPORTED_MODULE_2__.default, {
        page,
        pages,
        pagesMargin: 3,
        onPageClick: onProductPageClick,
        onPrevClick: onProductPrevPageClick,
        onNextClick: onProductNextPageClick,
        history
      }, container);
    }

    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./frontend/src/components/Loader.js":
/*!*******************************************!*\
  !*** ./frontend/src/components/Loader.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");


class Loader extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'spinner-border';
  }

  render() {
    this.container.innerHTML = '';
    const {
      width,
      height,
      margin,
      display
    } = this.props;
    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.margin = margin;
    this.container.style.display = display;
    const spanEl = document.createElement('span');
    spanEl.className = 'sr-only';
    spanEl.innerText = 'Loading...';
    this.container.appendChild(spanEl);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./frontend/src/components/Login/Login.js":
/*!************************************************!*\
  !*** ./frontend/src/components/Login/Login.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.js */ "./frontend/src/components/Login/LoginForm.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Login extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.onclick === 'move-register') {
        e.preventDefault();
        this.props.history.push(e.target.getAttribute('href'));
      }
    });

    this.container = document.createElement('main');
    this.container.className = 'py-3';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const {
      inputs,
      onSubmit,
      loading,
      error
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    const title = document.createElement('h1');
    title.innerText = 'Sign In';
    col.appendChild(title);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_LoginForm_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      inputs,
      error,
      onSubmit
    }, col);
    const linkRow = document.createElement('div');
    linkRow.className = 'py-3 row';
    col.appendChild(linkRow);
    const linkCol = document.createElement('div');
    linkCol.className = 'col';
    linkRow.appendChild(linkCol);
    linkCol.innerHTML = 'New Customer? <a href="/register" data-onclick="move-register">Register</a>';
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./frontend/src/components/Login/LoginForm.js":
/*!****************************************************!*\
  !*** ./frontend/src/components/Login/LoginForm.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/inputValidator.js */ "./frontend/src/modules/inputValidator.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class LoginForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const email = e.target.querySelector('#email').value;
      const password = e.target.querySelector('#password').value;
      const inputs = {
        email,
        password
      };

      if (!email) {
        this.setState({
          inputs,
          error: {
            message: 'Email is required'
          }
        });
        return;
      }

      if (!password) {
        this.setState({
          inputs,
          error: {
            message: 'Password is required'
          }
        });
        return;
      }

      if (!(0,_modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(email)) {
        this.setState({
          inputs,
          error: {
            message: 'Email is not valid'
          }
        });
        return;
      }

      this.props.onSubmit(inputs);
    });

    this.state = {
      inputs: {
        email: props.inputs.email,
        password: props.inputs.password
      },
      error: props.error
    };
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      inputs: {
        email,
        password
      },
      error
    } = this.state;
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error.message : '';
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${password}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./frontend/src/components/OrderProgressNavBar.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/OrderProgressNavBar.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class OrderProgressNavBar extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'a') {
        this.props.history.push(e.target.getAttribute('href'));
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'justify-content-center mb-4 nav';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      step
    } = this.props;
    this.container.innerHTML = `      
      <div class="nav-item">
        <a href="/login" data-rb-event-key="/login" class="nav-link">Sign In</a>
      </div>
      <div class="nav-item">
        <a href="/shipping" data-rb-event-key="/shipping" class="nav-link${step >= 2 ? ' active' : ' disabled'}">Shipping</a>
      </div>
      <div class="nav-item">
        <a href="/payment" class="nav-link${step >= 3 ? ' active' : ' disabled'}" role="button" tabindex="-1" aria-disabled="true">Payment</a>
      </div>
      <div class="nav-item">
        <a href="/placeorder" class="nav-link${step >= 4 ? ' active' : ' disabled'}" role="button" tabindex="-1" aria-disabled="true">Place Order</a>
      </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderProgressNavBar);

/***/ }),

/***/ "./frontend/src/components/Order/Order.js":
/*!************************************************!*\
  !*** ./frontend/src/components/Order/Order.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _OrderDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.js */ "./frontend/src/components/Order/OrderDetail.js");
/* harmony import */ var _OrderSummary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderSummary.js */ "./frontend/src/components/Order/OrderSummary.js");





class Order extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const {
      history,
      user,
      orderId,
      order: {
        loading,
        data,
        error
      },
      onPayPalClick,
      onMarkDeliveredClick
    } = this.props;
    const title = document.createElement('h1');
    title.innerText = `Order ${orderId}`;
    container.appendChild(title);

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    const orderDetailCol = document.createElement('div');
    orderDetailCol.className = 'col-md-8';
    row.appendChild(orderDetailCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_OrderDetail_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      order: data
    }, orderDetailCol);
    const orderSummaryCol = document.createElement('div');
    orderSummaryCol.className = 'col-md-4';
    row.appendChild(orderSummaryCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_OrderSummary_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      user,
      order: data,
      onPayPalClick,
      onMarkDeliveredClick
    }, orderSummaryCol);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./frontend/src/components/Order/OrderDetail.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Order/OrderDetail.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class OrderDetail extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'a') {
        const path = e.target.getAttribute('href');
        this.props.history.push(path);
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      order: {
        user,
        shippingAddress,
        orderItems,
        paymentMethod,
        isPaid,
        paidAt,
        isDelivered,
        deliveredAt
      }
    } = this.props;
    this.container.innerHTML = `
      <div class="list-group-item">
        <h2>Shipping</h2>
        <p><strong>Name: </strong> ${user.name}</p>
        <p><strong>Email: </strong> <a href="mailto:${user.email}">${user.email}</a></p>
        <p><strong>Address:</strong>${shippingAddress.address}, ${shippingAddress.city} ${shippingAddress.postalCode}, ${shippingAddress.country}</p>
        ${isDelivered ? `
          <div role="alert" class="fade alert alert-success show">Delivered on ${new Date(deliveredAt).toLocaleString()}</div>
          ` : `
          <div role="alert" class="fade alert alert-danger show">Not Delivered</div>
          `}        
      </div>
      <div class="list-group-item">
        <h2>Payment Method</h2>
        <p><strong>Method: </strong>${paymentMethod}</p>
        ${isPaid ? `
          <div role="alert" class="fade alert alert-success show">Paid on ${new Date(paidAt).toLocaleString()}</div>
          ` : `
          <div role="alert" class="fade alert alert-danger show">Not Paid</div>
          `}           
      </div>
      <div class="list-group-item">
        <h2>Order Items</h2>
        <div class="list-group list-group-flush">
        ${orderItems.map(item => `
            <div class="list-group-item">
              <div class="row">
                <div class="col-md-1">
                  <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col">
                  <a href="/products/${item._id}">${item.name}</a>
                </div>
                <div class="col-md-4">${item.qty} x $${item.price} = $${item.qty * item.price}</div>
              </div>
            </div>
          `).join('')}                    
        </div>
      </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetail);

/***/ }),

/***/ "./frontend/src/components/Order/OrderSummary.js":
/*!*******************************************************!*\
  !*** ./frontend/src/components/Order/OrderSummary.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrderSummary extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.dataset.name === 'btn-paypal') {
        if (window.confirm('Are you sure?')) {
          this.props.onPayPalClick();
        }

        return;
      }

      if (e.target.dataset.name === 'btn-mark-delivered') {
        this.props.onMarkDeliveredClick();
        return;
      }
    });

    _defineProperty(this, "getSummary", () => {
      const {
        order: {
          orderItems
        }
      } = this.props;
      const itemsPrice = Number(orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));
      const shippingPrice = itemsPrice > 100 ? 0 : 100;
      const taxPrice = Number((itemsPrice * 0.15).toFixed(2));
      const totalPrice = Number((itemsPrice + shippingPrice + taxPrice).toFixed(2));
      return {
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
      };
    });

    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      user,
      order: {
        isPaid,
        isDelivered
      }
    } = this.props;
    const prices = this.getSummary();
    this.container.innerHTML = `
    <div class="list-group list-group-flush">
      <div class="list-group-item">
        <h2>Order Summary</h2>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Items</div>
          <div class="col">$${prices.itemsPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Shipping</div>
          <div class="col">$${prices.shippingPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Tax</div>
          <div class="col">$${prices.taxPrice}</div>
        </div>
      </div>
      <div class="list-group-item">
        <div class="row">
          <div class="col">Total</div>
          <div class="col">$${prices.totalPrice}</div>
        </div>
      </div>      
      ${!isPaid ? `
          <div class="list-group-item">
            <button type="button" class="btn-block btn btn-primary" data-name="btn-paypal">PayPal</button>
          </div>
        ` : !user.isAdmin ? '' : !isDelivered ? `
          <div class="list-group-item">
            <button type="button" class="btn-block btn btn-primary" data-name="btn-mark-delivered">Mark As Delivered</button>
          </div>
        ` : ''}      
    </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);

/***/ }),

/***/ "./frontend/src/components/Pagination.js":
/*!***********************************************!*\
  !*** ./frontend/src/components/Pagination.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Pagination extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      const {
        onPageClick,
        onPrevClick,
        onNextClick
      } = this.props;

      if (e.target.dataset.onclick === 'onPageClick') {
        e.preventDefault();
        const pageNumber = e.target.dataset.page;
        onPageClick(pageNumber);
        return;
      }

      if (e.target.dataset.onclick === 'onPrevClick') {
        e.preventDefault();
        onPrevClick();
        return;
      }

      if (e.target.dataset.onclick === 'onNextClick') {
        e.preventDefault();
        onNextClick();
        return;
      }
    });

    this.container = document.createElement('ul');
    this.container.className = 'pagination justify-content-center align-items-center';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    const {
      page,
      pages,
      pagesMargin
    } = this.props;
    let startPage = page - pagesMargin > 0 ? page - pagesMargin : 1;
    let lastPage = startPage + pagesMargin * 2 <= pages ? startPage + pagesMargin * 2 : pages;
    if (lastPage === pages) startPage = lastPage - pagesMargin * 2 > 0 ? lastPage - pagesMargin * 2 : 1;
    this.container.innerHTML = `
      ${startPage > 1 ? `
        <span class="btn py-1 px-2" data-onclick="onPrevClick"><i class="fas fa-caret-left" data-onclick="onPrevClick"></i></span>
      ` : ''}
      ${Array(lastPage - startPage + 1).fill('').map((_, idx) => {
      const currentPage = idx + startPage;
      const isActivePage = page === currentPage;
      return `
            <li class="${isActivePage ? 'page-item active' : 'page-item'}">
              ${isActivePage ? `
              <span class="page-link" href="#">${currentPage}<span class="sr-only">(current)</span></span>
              ` : `
              <a class="page-link" href="#" data-onclick="onPageClick" data-page="${currentPage}">${currentPage}</a>
              `}
            </li>
          `;
    }).join('')}
      ${lastPage < pages ? `
        <span class="btn py-1 px-2" data-onclick="onNextClick"><i class="fas fa-caret-right" data-onclick="onNextClick"></i></span> 
        ` : ''}      
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./frontend/src/components/Payment/Payment.js":
/*!****************************************************!*\
  !*** ./frontend/src/components/Payment/Payment.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OrderProgressNavBar.js */ "./frontend/src/components/OrderProgressNavBar.js");
/* harmony import */ var _PaymentForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentForm.js */ "./frontend/src/components/Payment/PaymentForm.js");




class Payment extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      step,
      onSubmit
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step
    }, col);
    const title = document.createElement('h1');
    title.innerText = 'Payment Method';
    col.appendChild(title);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_PaymentForm_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      onSubmit
    }, col);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);

/***/ }),

/***/ "./frontend/src/components/Payment/PaymentForm.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Payment/PaymentForm.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PaymentForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const paymentMethod = this.container.querySelector('input[id=PayPal]').value;
      this.props.onSubmit({
        paymentMethod
      });
    });

    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    this.container.innerHTML = `
      <div class="form-group">
        <legend class="form-label">Select Method</legend>
        <div class="col">
          <div class="form-check">
            <input name="paymentMethod" type="radio" id="PayPal" class="form-check-input" value="PayPal" checked="">
            <label title="" for="PayPal" class="form-check-label">PayPal or Credit Card</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Continue</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentForm);

/***/ }),

/***/ "./frontend/src/components/PlaceOrder/OrderDetail.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/PlaceOrder/OrderDetail.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");


class OrderDetail extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {
    const {
      cart: {
        items,
        shippingAddress: {
          address,
          city,
          postalCode,
          country
        },
        paymentMethod
      }
    } = this.props;
    this.container.innerHTML = `
      <div class="list-group-item">
        <h2>Shipping</h2>
        <p><strong>Address:</strong>${address}, ${city} ${postalCode}, ${country}</p>
      </div>
      <div class="list-group-item">
        <h2>Payment Method</h2>
        <strong>Method: </strong>${paymentMethod}
      </div>
      <div class="list-group-item">
        <h2>Order Items</h2>
        <div class="list-group list-group-flush">
            ${items.map(item => `
                <div class="list-group-item">
                  <div class="row">
                    <div class="col-md-1">
                      <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                    </div>
                    <div class="col">
                      <a href="/product/${item._id}">${item.name}</a>
                    </div>
                    <div class="col-md-4">${item.qty} x $${item.price} = $${item.qty * item.price}</div>
                  </div>
                </div>
              `).join('')}
        </div>
      </div>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetail);

/***/ }),

/***/ "./frontend/src/components/PlaceOrder/OrderSummary.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/PlaceOrder/OrderSummary.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrderSummary extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'button') {
        const {
          cart
        } = this.props;

        const order = _objectSpread({
          orderItems: cart.items.map(item => _objectSpread(_objectSpread({}, item), {}, {
            product: item._id
          })),
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod
        }, this.getSummary());

        this.props.onSubmit(order);
      }
    });

    _defineProperty(this, "getSummary", () => {
      const {
        cart
      } = this.props;
      const itemsPrice = Number(cart.items.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));
      const shippingPrice = itemsPrice > 100 ? 0 : 100;
      const taxPrice = Number((itemsPrice * 0.15).toFixed(2));
      const totalPrice = Number((itemsPrice + shippingPrice + taxPrice).toFixed(2));
      return {
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
      };
    });

    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const {
      orderCreationInfo
    } = this.props;
    const prices = this.getSummary();
    const listGroup = document.createElement('div');
    listGroup.className = 'list-group list-group-flush';
    this.container.appendChild(listGroup);
    const listGroupItem01 = document.createElement('div');
    listGroupItem01.className = 'list-group-item';
    listGroupItem01.innerHTML = '<h2>Order Summary</h2>';
    listGroup.appendChild(listGroupItem01);
    const listGroupItem02 = document.createElement('div');
    listGroupItem02.className = 'list-group-item';
    listGroup.appendChild(listGroupItem02);
    listGroupItem02.innerHTML = `
      <div class="row">
        <div class="col">Items</div>
        <div class="col">$${prices.itemsPrice}</div>
      </div>
    `;
    const listGroupItem03 = document.createElement('div');
    listGroupItem03.className = 'list-group-item';
    listGroup.appendChild(listGroupItem03);
    listGroupItem03.innerHTML = `
      <div class="row">
        <div class="col">Shipping</div>
        <div class="col">$${prices.shippingPrice}</div>
      </div>
    `;
    const listGroupItem04 = document.createElement('div');
    listGroupItem04.className = 'list-group-item';
    listGroup.appendChild(listGroupItem04);
    listGroupItem04.innerHTML = `
      <div class="row">
        <div class="col">Tax</div>
        <div class="col">$${prices.taxPrice}</div>
      </div>
    `;
    const listGroupItem05 = document.createElement('div');
    listGroupItem05.className = 'list-group-item';
    listGroup.appendChild(listGroupItem05);
    listGroupItem05.innerHTML = `
      <div class="row">
        <div class="col">Total</div>
        <div class="col">$${prices.totalPrice}</div>
      </div>
    `;

    if (orderCreationInfo.loading) {
      const loadingItem = document.createElement('div');
      loadingItem.className = 'list-group-item';
      listGroup.appendChild(loadingItem);
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '30px',
        height: '30px',
        margin: 'auto',
        display: 'block'
      }, loadingItem);
    }

    if (orderCreationInfo.error) {
      const errorItem = document.createElement('div');
      errorItem.className = 'list-group-item';
      listGroup.appendChild(errorItem);
      errorItem.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${orderCreationInfo.error.message}
        </div>
      `;
    }

    const listGroupItem06 = document.createElement('div');
    listGroupItem06.className = 'list-group-item';
    listGroup.appendChild(listGroupItem06);
    listGroupItem06.innerHTML = `
      <button type="button" class="btn-block btn btn-primary">Place Order</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);

/***/ }),

/***/ "./frontend/src/components/PlaceOrder/PlaceOrder.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/PlaceOrder/PlaceOrder.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OrderProgressNavBar.js */ "./frontend/src/components/OrderProgressNavBar.js");
/* harmony import */ var _OrderDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.js */ "./frontend/src/components/PlaceOrder/OrderDetail.js");
/* harmony import */ var _OrderSummary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderSummary.js */ "./frontend/src/components/PlaceOrder/OrderSummary.js");





class PlaceOrder extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      step,
      cart,
      orderCreationInfo,
      onSubmit
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step
    }, container);
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    const col1 = document.createElement('div');
    col1.className = 'col-md-8';
    row.appendChild(col1);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_OrderDetail_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      cart
    }, col1);
    const col2 = document.createElement('div');
    col2.className = 'col-md-4';
    row.appendChild(col2);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_OrderSummary_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      cart,
      orderCreationInfo,
      onSubmit
    }, col2);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceOrder);

/***/ }),

/***/ "./frontend/src/components/ProductCard.js":
/*!************************************************!*\
  !*** ./frontend/src/components/ProductCard.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _modules_LazyLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/LazyLoad.js */ "./frontend/src/modules/LazyLoad.js");
/* harmony import */ var _Rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating.js */ "./frontend/src/components/Rating.js");




class ProductCard extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.container = document.createElement('div');
    this.container.className = 'my-3 p-3 rounded card';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';
    const {
      product
    } = this.props;
    const imageLink = document.createElement('a');
    imageLink.setAttribute('href', `/products/${product._id}`);
    imageLink.addEventListener('click', e => this.handleLinkClick(e, `/products/${product._id}`));
    this.container.appendChild(imageLink);
    const image = document.createElement('img');
    image.className = 'card-img-top lazy';
    image.dataset.src = product.image;
    (0,_modules_LazyLoad_js__WEBPACK_IMPORTED_MODULE_2__.imageLazyLoad)(image);
    imageLink.appendChild(image);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    this.container.appendChild(cardBody);
    const titleLink = document.createElement('a');
    titleLink.setAttribute('href', `/products/${product._id}`);
    titleLink.addEventListener('click', e => this.handleLinkClick(e, `/products/${product._id}`));
    cardBody.appendChild(titleLink);
    const title = document.createElement('strong');
    title.innerText = product.name;
    titleLink.appendChild(title);
    const cardText = document.createElement('div');
    cardBody.appendChild(cardText);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Rating_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      value: product.rating,
      text: `${product.numReviews} reviews`
    }, cardText);
    const price = document.createElement('h3');
    price.className = 'card-text';
    price.innerText = `$${product.price}`;
    cardBody.appendChild(price);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ "./frontend/src/components/ProductForm.js":
/*!************************************************!*\
  !*** ./frontend/src/components/ProductForm.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProductForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const inputs = this.getInputs();

      if (!inputs.name) {
        this.setState({
          inputs,
          error: {
            message: 'Name is requried'
          }
        });
        return;
      }

      if (!inputs.price) {
        this.setState({
          inputs,
          error: {
            message: 'Price is requried'
          }
        });
        return;
      }

      if (!inputs.image) {
        this.setState({
          inputs,
          error: {
            message: 'Image is requried'
          }
        });
        return;
      }

      if (!inputs.brand) {
        this.setState({
          inputs,
          error: {
            message: 'Brand is requried'
          }
        });
        return;
      }

      if (!inputs.countInStock) {
        this.setState({
          inputs,
          error: {
            message: 'Count In Stock is requried'
          }
        });
        return;
      }

      if (!inputs.category) {
        this.setState({
          inputs,
          error: {
            message: 'Category is requried'
          }
        });
        return;
      }

      if (!inputs.description) {
        this.setState({
          inputs,
          error: {
            message: 'Description is requried'
          }
        });
        return;
      }

      this.props.onSubmit(inputs);
    });

    _defineProperty(this, "handleInput", e => {
      e.preventDefault();

      if (e.target.id === 'image-file') {
        const product = this.getInputs();
        const file = e.target.files[0];
        this.props.onImageSelect(file, product);
        return;
      }
    });

    _defineProperty(this, "getInputs", () => {
      const name = this.container.querySelector('input[id=name]').value;
      const price = this.container.querySelector('input[id=price]').value;
      const image = this.container.querySelector('input[id=image]').value;
      const brand = this.container.querySelector('input[id=brand]').value;
      const countInStock = this.container.querySelector('input[id=countInStock]').value;
      const category = this.container.querySelector('input[id=category]').value;
      const description = this.container.querySelector('input[id=description]').value;
      return {
        name,
        price,
        image,
        brand,
        countInStock,
        category,
        description
      };
    });

    const {
      inputs: _inputs,
      error,
      uploadState
    } = props;
    this.state = {
      inputs: _inputs,
      error,
      uploadState
    };
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
    this.container.addEventListener('input', this.handleInput);
  }

  render() {
    const {
      inputs,
      error,
      uploadState
    } = this.state;
    const {
      btnText
    } = this.props;
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error.message : '';
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${inputs.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="price">Price</label>
        <input placeholder="Enter price" type="number" id="price" class="form-control" value="${inputs.price}">
      </div>
      <div class="form-group">
        <label class="form-label" for="image">Image</label>
        <input placeholder="Enter image url" type="text" id="image" class="form-control" value="${inputs.image}">
        <div class="spinner-border" style="width:30px;height:30px;margin:auto;display:${uploadState.loading ? 'block' : 'none'};">
          <span class="sr-only">Loading...</span>
        </div>
        ${!uploadState.loading ? `
          <div class="custom custom-file">
            <input id="image-file" type="file" class="custom-file-input">
            <label for="image-file" class="custom-file-label">Choose File</label>
          </div>
          ` : ''}        
      </div>
      <div class="form-group">
        <label class="form-label" for="brand">Brand</label>
        <input placeholder="Enter brand" type="text" id="brand" class="form-control" value="${inputs.brand}">
      </div>
      <div class="form-group">
        <label class="form-label" for="countInStock">Count In Stock</label>
        <input placeholder="Enter countInStock" type="number" id="countInStock" class="form-control" value="${inputs.countInStock}">
      </div>
      <div class="form-group">
        <label class="form-label" for="category">Category</label>
        <input placeholder="Enter category" type="text" id="category" class="form-control" value="${inputs.category}">
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input placeholder="Enter description" type="text" id="description" class="form-control" value="${inputs.description}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">${btnText}</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductForm);

/***/ }),

/***/ "./frontend/src/components/Product/CartButtonCard.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/Product/CartButtonCard.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CartButtonCard extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleQtySelect", e => {
      const selectedQty = Number(e.target.value);
      this.setState({
        qty: selectedQty
      });
    });

    _defineProperty(this, "handleAddToCart", () => {
      const {
        product,
        onAddBtnClick,
        history
      } = this.props;
      const {
        qty
      } = this.state;
      onAddBtnClick(product, qty);
    });

    this.state = {
      qty: 1
    };
    this.container = document.createElement('div');
    this.container.className = 'card';
  }

  render() {
    this.container.innerHTML = '';
    const {
      product
    } = this.props;
    const {
      qty
    } = this.state;
    const listGroup = document.createElement('div');
    listGroup.className = 'list-group list-group-flush';
    this.container.appendChild(listGroup);
    const listGroupItem1 = document.createElement('div');
    listGroupItem1.className = 'list-group-item';
    listGroup.appendChild(listGroupItem1);
    const priceRow = document.createElement('div');
    priceRow.className = 'row';
    listGroupItem1.appendChild(priceRow);
    const priceCol1 = document.createElement('div');
    priceCol1.className = 'col';
    priceCol1.innerText = 'Price:';
    priceRow.appendChild(priceCol1);
    const priceCol2 = document.createElement('div');
    priceCol2.className = 'col';
    priceCol2.innerHTML = `<strong>$${product.price}</strong>`;
    priceRow.appendChild(priceCol2);
    const listGroupItem2 = document.createElement('div');
    listGroupItem2.className = 'list-group-item';
    listGroup.appendChild(listGroupItem2);
    listGroupItem2.innerHTML = `
      <div class="row">
        <div class="col">Status:</div>
        <div class="col">${product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</div>
      </div>
    `;

    if (product.countInStock > 0) {
      const listGroupItem3 = document.createElement('div');
      listGroupItem3.className = 'list-group-item';
      listGroup.appendChild(listGroupItem3);
      const qtyRow = document.createElement('div');
      qtyRow.className = 'row';
      listGroupItem3.appendChild(qtyRow);
      const qtyCol1 = document.createElement('div');
      qtyCol1.className = 'col';
      qtyCol1.innerText = 'Qty';
      qtyRow.appendChild(qtyCol1);
      const qtyCol2 = document.createElement('div');
      qtyCol2.className = 'col';
      qtyRow.appendChild(qtyCol2);
      const qtySelect = document.createElement('select');
      qtySelect.className = 'form-control';
      qtySelect.addEventListener('input', this.handleQtySelect);
      qtyCol2.appendChild(qtySelect);
      Array(product.countInStock).fill('').forEach((_, idx) => {
        const option = document.createElement('option');
        option.value = idx + 1;
        option.innerText = idx + 1;
        option.selected = idx + 1 === qty ? true : false;
        qtySelect.appendChild(option);
      });
    }

    const listGroupItem4 = document.createElement('div');
    listGroupItem4.className = 'list-group-item';
    listGroup.appendChild(listGroupItem4);
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'btn-block btn btn-primary';
    addToCartBtn.type = 'button';
    addToCartBtn.disabled = product.countInStock === 0;
    addToCartBtn.innerText = 'Add To Cart';
    addToCartBtn.addEventListener('click', this.handleAddToCart);
    listGroupItem4.appendChild(addToCartBtn);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartButtonCard);

/***/ }),

/***/ "./frontend/src/components/Product/Product.js":
/*!****************************************************!*\
  !*** ./frontend/src/components/Product/Product.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _ProductInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductInfo.js */ "./frontend/src/components/Product/ProductInfo.js");
/* harmony import */ var _CartButtonCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartButtonCard.js */ "./frontend/src/components/Product/CartButtonCard.js");
/* harmony import */ var _ProductReview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReview.js */ "./frontend/src/components/Product/ProductReview.js");
/* harmony import */ var _ProductReviewForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductReviewForm.js */ "./frontend/src/components/Product/ProductReviewForm.js");







class Product extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  goBack(e) {
    e.preventDefault();
    history.back();
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const {
      product: {
        loading,
        data,
        error
      },
      onAddBtnClick,
      reviewInputs,
      onReviewSubmit,
      history
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    const goBackBtn = document.createElement('a');
    goBackBtn.className = 'btn btn-light my-3';
    goBackBtn.setAttribute('href', '/');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', this.goBack);
    container.appendChild(goBackBtn);
    const productDetailRow = document.createElement('div');
    productDetailRow.className = 'row';
    container.appendChild(productDetailRow);
    const imageCol = document.createElement('div');
    imageCol.className = 'col-md-6';
    productDetailRow.appendChild(imageCol);
    const productImg = document.createElement('img');
    productImg.className = 'img-fluid';
    productImg.alt = data.name;
    productImg.src = data.image;
    imageCol.appendChild(productImg);
    const infoCol = document.createElement('div');
    infoCol.className = 'col-md-3';
    productDetailRow.appendChild(infoCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.renderComponent)(_ProductInfo_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      product: data
    }, infoCol);
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-3';
    productDetailRow.appendChild(cardCol);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.renderComponent)(_CartButtonCard_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: data,
      onAddBtnClick,
      history
    }, cardCol);
    const reviewsRow = document.createElement('div');
    reviewsRow.className = 'row';
    container.appendChild(reviewsRow);
    const reviewsCol = document.createElement('div');
    reviewsCol.className = 'col-md-6';
    reviewsRow.appendChild(reviewsCol);
    const reviewsTitle = document.createElement('h2');
    reviewsTitle.innerText = 'Reviews';
    reviewsCol.appendChild(reviewsTitle);
    const reviewsContainer = document.createElement('div');
    reviewsContainer.className = 'list-group list-group-flush';
    reviewsCol.appendChild(reviewsContainer);
    data.reviews.forEach(review => {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.renderComponent)(_ProductReview_js__WEBPACK_IMPORTED_MODULE_3__.default, {
        review
      }, reviewsContainer);
    });

    if (data.reviews.length === 0) {
      const noReviewAlert = document.createElement('div');
      noReviewAlert.className = 'alert alert-light';
      noReviewAlert.innerText = 'No Reviews';
      reviewsContainer.appendChild(noReviewAlert);
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_5__.renderComponent)(_ProductReviewForm_js__WEBPACK_IMPORTED_MODULE_4__.default, {
      inputs: reviewInputs,
      onSubmit: onReviewSubmit
    }, reviewsContainer);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./frontend/src/components/Product/ProductInfo.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Product/ProductInfo.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rating.js */ "./frontend/src/components/Rating.js");



class ProductInfo extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {
    this.container.innerHTML = '';
    const {
      product
    } = this.props;
    const listGroupItem1 = document.createElement('div');
    listGroupItem1.className = 'list-group-item';
    this.container.appendChild(listGroupItem1);
    const title = document.createElement('h3');
    title.innerText = product.name;
    listGroupItem1.appendChild(title);
    const listGroupItem2 = document.createElement('div');
    listGroupItem2.className = 'list-group-item';
    this.container.appendChild(listGroupItem2);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Rating_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      value: product.rating,
      text: `${product.numReviews} reviews`
    }, listGroupItem2);
    const listGroupItem3 = document.createElement('div');
    listGroupItem3.className = 'list-group-item';
    listGroupItem3.innerText = `Price: $${product.price}`;
    this.container.appendChild(listGroupItem3);
    const listGroupItem4 = document.createElement('div');
    listGroupItem4.className = 'list-group-item';
    listGroupItem4.innerText = `Description: ${product.description}`;
    this.container.appendChild(listGroupItem4);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);

/***/ }),

/***/ "./frontend/src/components/Product/ProductReview.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Product/ProductReview.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rating.js */ "./frontend/src/components/Rating.js");



class ProductReviews extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group-item';
  }

  render() {
    this.container.innerHTML = '';
    const {
      review
    } = this.props;
    const userName = document.createElement('strong');
    userName.innerText = review.name;
    this.container.appendChild(userName);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Rating_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      value: review.rating,
      text: ``
    }, this.container);
    const updatedDate = document.createElement('p');
    updatedDate.innerText = new Date(review.updatedAt).toLocaleDateString();
    this.container.appendChild(updatedDate);
    const comment = document.createElement('p');
    comment.innerText = review.comment;
    this.container.appendChild(comment);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviews);

/***/ }),

/***/ "./frontend/src/components/Product/ProductReviewForm.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/Product/ProductReviewForm.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProductReviewForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const strRating = e.target.querySelector('select').value;
      const rating = strRating ? Number(strRating) : 0;
      const comment = e.target.querySelector('textarea').value;

      if (!rating) {
        this.setState({
          inputs: {
            rating,
            comment,
            error: 'Rating is requried'
          }
        });
        return;
      }

      if (!comment) {
        this.setState({
          inputs: {
            rating,
            comment,
            error: 'Comment is requried'
          }
        });
        return;
      }

      this.props.onSubmit({
        rating,
        comment
      });
    });

    this.state = {
      inputs: {
        rating: props.inputs.rating,
        comment: props.inputs.comment,
        error: props.inputs.error
      }
    };
    this.container = document.createElement('div');
    this.container.className = 'list-group-item';
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      inputs: {
        rating,
        comment,
        error
      }
    } = this.state;
    this.container.innerHTML = `
      <h2>Write a Customer Review</h2>
      <form class="">
        <div class="form-group">
          <label class="form-label" for="rating">Rating</label>
          <select id="rating" class="form-control">
            <option value="">Select...</option>
            <option value="1" ${rating === 1 ? 'selected' : ''}>1 - Poor</option>
            <option value="2" ${rating === 2 ? 'selected' : ''}>2 - Fair</option>
            <option value="3" ${rating === 3 ? 'selected' : ''}>3 - Good</option>
            <option value="4" ${rating === 4 ? 'selected' : ''}>4 - Very Good</option>
            <option value="5" ${rating === 5 ? 'selected' : ''}>5 - Excellent</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="comment">Comment</label>
          <textarea row="3" id="comment" class="form-control">${comment}</textarea>
        </div>
        <div class="text-danger my-3 px-2" style="display:${error ? 'block' : 'none'}">
          ${error ? error : ''}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewForm);

/***/ }),

/***/ "./frontend/src/components/Profile/MyOrdersTable.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Profile/MyOrdersTable.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrdersTable extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'a') {
        const path = e.target.getAttribute('href');
        this.props.history.push(path);
      }
    });

    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const {
      orders: {
        loading,
        data,
        error
      }
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, this.container);
      this.container.className = '';
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      this.container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr class="text-center">
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${data.map(order => `
            <tr class="text-center">
              <td>${order._id}</td>
              <td>${new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${order.totalPrice}</td>
              <td>${order.isPaid ? new Date(order.paidAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td>${order.isDelivered ? new Date(order.deliveredAt).toLocaleDateString() : '<i class="fas fa-times" style="color: red;"></i>'}</td>
              <td><a href="/orders/${order._id}" class="btn-sm btn btn-light">Details</a></td>
            </tr>
          `).join('')}                   
        </tbody>
      </table>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersTable);

/***/ }),

/***/ "./frontend/src/components/Profile/UserProfileForm.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/Profile/UserProfileForm.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/inputValidator.js */ "./frontend/src/modules/inputValidator.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ProfileForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const name = this.container.querySelector('input[id=name]').value;
      const email = this.container.querySelector('input[id=email]').value;
      const password = this.container.querySelector('input[id=password]').value;
      const confirmPassword = this.container.querySelector('input[id=confirmPassword]').value;
      const inputs = {
        name,
        email,
        password,
        confirmPassword
      };

      if (!name) {
        this.setState({
          inputs,
          error: {
            message: 'Name is required'
          }
        });
        return;
      }

      if (!email) {
        this.setState({
          inputs,
          error: {
            message: 'Email is required'
          }
        });
        return;
      }

      if (!(0,_modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(email)) {
        this.setState({
          inputs,
          error: {
            message: 'Email is not valid'
          }
        });
        return;
      }

      if (password !== confirmPassword) {
        this.setState({
          inputs,
          error: {
            message: 'Password do not match'
          }
        });
        return;
      }

      this.props.onSubmit(inputs);
    });

    const {
      inputs: {
        name: _name,
        email: _email,
        password: _password,
        confirmPassword: _confirmPassword
      },
      loading,
      error
    } = props;
    this.state = {
      inputs: {
        name: _name,
        email: _email,
        password: _password,
        confirmPassword: _confirmPassword
      },
      loading,
      error
    };
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      inputs,
      loading,
      error
    } = this.state;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, this.container);
      return this.container;
    }

    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error.message : '';
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${inputs.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${inputs.email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${inputs.password}">
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input placeholder="Confirm password" type="password" id="confirmPassword" class="form-control" value="${inputs.confirmPassword}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileForm);

/***/ }),

/***/ "./frontend/src/components/Rating.js":
/*!*******************************************!*\
  !*** ./frontend/src/components/Rating.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");


class Rating extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'rating';
  }

  render() {
    this.container.innerHTML = '';
    const {
      value,
      text,
      color = '#f8e825'
    } = this.props;
    const star1 = document.createElement('span');
    this.container.appendChild(star1);
    const starIcon1 = document.createElement('i');
    starIcon1.className = value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star';
    starIcon1.style.color = color;
    star1.appendChild(starIcon1);
    const star2 = document.createElement('span');
    this.container.appendChild(star2);
    const starIcon2 = document.createElement('i');
    starIcon2.className = value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star';
    starIcon2.style.color = color;
    star2.appendChild(starIcon2);
    const star3 = document.createElement('span');
    this.container.appendChild(star3);
    const starIcon3 = document.createElement('i');
    starIcon3.className = value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star';
    starIcon3.style.color = color;
    star3.appendChild(starIcon3);
    const star4 = document.createElement('span');
    this.container.appendChild(star4);
    const starIcon4 = document.createElement('i');
    starIcon4.className = value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star';
    starIcon4.style.color = color;
    star4.appendChild(starIcon4);
    const star5 = document.createElement('span');
    this.container.appendChild(star5);
    const starIcon5 = document.createElement('i');
    starIcon5.className = value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star';
    starIcon5.style.color = color;
    star5.appendChild(starIcon5);
    const textEl = document.createElement('span');
    textEl.innerText = text ? text : '';
    this.container.appendChild(textEl);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rating);

/***/ }),

/***/ "./frontend/src/components/Register/Register.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Register/Register.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _RegisterForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.js */ "./frontend/src/components/Register/RegisterForm.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Register extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      if (e.target.dataset.onclick === 'move-login') {
        e.preventDefault();
        this.props.history.push(e.target.getAttribute('href'));
      }
    });

    this.container = document.createElement('main');
    this.container.className = 'py-3';
    this.container.addEventListener('click', this.handleClick);
  }

  render() {
    this.container.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const {
      inputs,
      onSubmit,
      loading,
      error
    } = this.props;

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    const title = document.createElement('h1');
    title.innerText = 'Sign Up';
    col.appendChild(title);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_RegisterForm_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      inputs,
      error,
      onSubmit
    }, col);
    const linkRow = document.createElement('div');
    linkRow.className = 'py-3 row';
    col.appendChild(linkRow);
    const linkCol = document.createElement('div');
    linkCol.className = 'col';
    linkRow.appendChild(linkCol);
    linkCol.innerHTML = 'Have an Account? <a href="/login" data-onclick="move-login">Login</a>';
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./frontend/src/components/Register/RegisterForm.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Register/RegisterForm.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/inputValidator.js */ "./frontend/src/modules/inputValidator.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RegisterForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const name = e.target.querySelector('#name').value;
      const email = e.target.querySelector('#email').value;
      const password = e.target.querySelector('#password').value;
      const confirmPassword = e.target.querySelector('#confirmPassword').value;
      const inputs = {
        name,
        email,
        password,
        confirmPassword
      };

      if (!name) {
        this.setState({
          inputs,
          error: {
            message: 'Name is required'
          }
        });
        return;
      }

      if (!email) {
        this.setState({
          inputs,
          error: {
            message: 'Email is required'
          }
        });
        return;
      }

      if (!password) {
        this.setState({
          inputs,
          error: {
            message: 'Password is required'
          }
        });
        return;
      }

      if (!(0,_modules_inputValidator_js__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(email)) {
        this.setState({
          inputs,
          error: {
            message: 'Email is not valid'
          }
        });
        return;
      }

      if (password !== confirmPassword) {
        this.setState({
          inputs,
          error: {
            message: 'Password do not match'
          }
        });
        return;
      }

      this.props.onSubmit(inputs);
    });

    this.state = {
      inputs: {
        name: props.inputs.name,
        email: props.inputs.email,
        password: props.inputs.password,
        confirmPassword: props.inputs.confirmPassword
      },
      error: props.error
    };
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      inputs: {
        name,
        email,
        password,
        confirmPassword
      },
      error
    } = this.state;
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error.message : '';
    this.container.innerHTML = `      
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="text" id="name" class="form-control" value="${name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="text" id="email" class="form-control" value="${email}">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input placeholder="Enter password" type="password" id="password" class="form-control" value="${password}">
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input placeholder="Confirm password" type="password" id="confirmPassword" class="form-control" value="${confirmPassword}">
      </div>
      <div class="text-danger my-3 px-2" style="display:${errorMessage ? 'block' : 'none'}">
        ${errorMessage}
      </div>
      <button type="submit" class="btn btn-primary">Register</button>      
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

/***/ }),

/***/ "./frontend/src/components/SearchResult/SearchResult.js":
/*!**************************************************************!*\
  !*** ./frontend/src/components/SearchResult/SearchResult.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader.js */ "./frontend/src/components/Loader.js");
/* harmony import */ var _ProductCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductCard.js */ "./frontend/src/components/ProductCard.js");
/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pagination.js */ "./frontend/src/components/Pagination.js");





class SearchResult extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      productsInfo: {
        loading,
        data,
        error
      },
      onProductPageClick,
      onProductPrevPageClick,
      onProductNextPageClick,
      history
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const btnGoBack = document.createElement('span');
    btnGoBack.className = 'btn btn-light my-3';
    btnGoBack.innerText = 'Go Back';
    btnGoBack.addEventListener('click', () => history.goBack());
    container.appendChild(btnGoBack);
    const title = document.createElement('h1');
    title.innerText = 'Products';
    container.appendChild(title);

    if (loading) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_Loader_js__WEBPACK_IMPORTED_MODULE_0__.default, {
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }, container);
      return this.container;
    }

    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);
      return this.container;
    }

    if (!data) return this.container;
    const {
      products,
      page,
      pages
    } = data;
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    products.forEach(product => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      row.appendChild(col);
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_ProductCard_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        product,
        history
      }, col);
    });

    if (data.length === 0) {
      const noResultAlert = document.createElement('div');
      noResultAlert.className = 'alert alert-light';
      noResultAlert.innerText = 'No Results';
      row.appendChild(noResultAlert);
    }

    if (pages > 1) {
      (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_Pagination_js__WEBPACK_IMPORTED_MODULE_2__.default, {
        page,
        pages,
        pagesMargin: 3,
        onPageClick: onProductPageClick,
        onPrevClick: onProductPrevPageClick,
        onNextClick: onProductNextPageClick,
        history
      }, container);
    }

    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResult);

/***/ }),

/***/ "./frontend/src/components/Shipping/Shipping.js":
/*!******************************************************!*\
  !*** ./frontend/src/components/Shipping/Shipping.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OrderProgressNavBar.js */ "./frontend/src/components/OrderProgressNavBar.js");
/* harmony import */ var _ShippingForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShippingForm.js */ "./frontend/src/components/Shipping/ShippingForm.js");




class Shipping extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      step,
      shippingAddress,
      onSubmit
    } = this.props;
    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_OrderProgressNavBar_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step
    }, col);
    const title = document.createElement('h1');
    title.innerText = 'Shipping';
    col.appendChild(title);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_ShippingForm_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      shippingAddress,
      onSubmit
    }, col);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shipping);

/***/ }),

/***/ "./frontend/src/components/Shipping/ShippingForm.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Shipping/ShippingForm.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ShippingForm extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const address = this.container.querySelector('input[id=address]').value;
      const city = this.container.querySelector('input[id=city]').value;
      const postalCode = this.container.querySelector('input[id=postalCode]').value;
      const country = this.container.querySelector('input[id=country]').value;
      this.props.onSubmit({
        address,
        city,
        postalCode,
        country
      });
    });

    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  render() {
    const {
      shippingAddress: {
        address,
        city,
        postalCode,
        country
      }
    } = this.props;
    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="address">Address</label>
        <input placeholder="Enter address" required="" type="text" id="address" class="form-control" value="${address}">
      </div>
      <div class="form-group">
        <label class="form-label" for="city">City</label>
        <input placeholder="Enter city" required="" type="text" id="city" class="form-control" value="${city}">
      </div>
      <div class="form-group">
        <label class="form-label" for="postalCode">Postal Code</label>
        <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" value="${postalCode}">
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Country</label>
        <input placeholder="Enter country" required="" type="text" id="country" class="form-control" value="${country}">
      </div>
      <button type="submit" class="btn btn-primary">Continue</button>
    `;
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingForm);

/***/ }),

/***/ "./frontend/src/containers/AdminCreateProductContainer.js":
/*!****************************************************************!*\
  !*** ./frontend/src/containers/AdminCreateProductContainer.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminProduct_AdminProduct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminProduct/AdminProduct.js */ "./frontend/src/components/AdminProduct/AdminProduct.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _api_upload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upload.js */ "./frontend/src/api/upload.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AdminCreateProductContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "createProduct", async product => {
      const token = this.props.user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'product');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.createProduct(token, product);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'product', data);
        this.props.history.push('/admin/products');
      } else {
        this.setState({
          product: {
            loading: false,
            error: data
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          },
          inputsError: data
        });
      }
    });

    _defineProperty(this, "uploadImage", async (file, product) => {
      const token = this.props.user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'uploadState');
      const {
        isError,
        data
      } = await _api_upload_js__WEBPACK_IMPORTED_MODULE_4__.uploadImage(file, token);

      if (!isError) {
        this.setState({
          uploadState: {
            loading: false
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: data,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          }
        });
      } else {
        this.setState({
          uploadState: {
            loading: false
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          },
          inputsError: data
        });
      }
    });

    this.state = {
      product: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState,
      uploadState: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState,
      inputs: {
        name: '',
        price: '',
        image: '/images/sample.jpg',
        brand: '',
        countInStock: '',
        category: '',
        description: ''
      },
      inputsError: null
    };
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      product,
      uploadState,
      inputs,
      inputsError
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_AdminProduct_AdminProduct_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: 'create',
      history,
      product,
      uploadState,
      inputs,
      inputsError,
      onSubmit: this.createProduct,
      onImageSelect: this.uploadImage
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminCreateProductContainer);

/***/ }),

/***/ "./frontend/src/containers/AdminEditProductContainer.js":
/*!**************************************************************!*\
  !*** ./frontend/src/containers/AdminEditProductContainer.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminProduct_AdminProduct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminProduct/AdminProduct.js */ "./frontend/src/components/AdminProduct/AdminProduct.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _api_upload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upload.js */ "./frontend/src/api/upload.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AdminEditProductContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateProduct", async product => {
      const token = this.props.user.token;
      const {
        productId
      } = this.props;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'product');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.updateProduct(token, _objectSpread({
        id: productId
      }, product));

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'product', data);
        this.props.history.push('/admin/products');
      } else {
        this.setState({
          product: {
            loading: false,
            error: data
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          },
          inputsError: data
        });
      }
    });

    _defineProperty(this, "uploadImage", async (file, product) => {
      const token = this.props.user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'uploadState');
      const {
        isError,
        data
      } = await _api_upload_js__WEBPACK_IMPORTED_MODULE_4__.uploadImage(file, token);

      if (!isError) {
        this.setState({
          uploadState: {
            loading: false
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: data,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          }
        });
      } else {
        this.setState({
          uploadState: {
            loading: false
          },
          inputs: {
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            countInStock: product.countInStock,
            category: product.category,
            description: product.description
          },
          inputsError: data
        });
      }
    });

    this.state = {
      product: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState,
      uploadState: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState,
      inputs: {
        name: '',
        price: '',
        image: '',
        brand: '',
        countInStock: '',
        category: '',
        description: ''
      },
      inputsError: null
    };
    this.container = document.createElement('div');
    this.initState();
  }

  async initState() {
    const {
      productId
    } = this.props;
    _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'product');
    const {
      isError,
      data
    } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.fetchProduct(productId);

    if (!isError) {
      this.setState({
        product: {
          loading: false,
          data,
          error: null
        },
        inputs: {
          name: data.name,
          price: data.price,
          image: data.image,
          brand: data.brand,
          countInStock: data.countInStock,
          category: data.category,
          description: data.description
        }
      });
    } else {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'product', data);
    }
  }

  render() {
    this.container.innerHTML = '';
    const {
      product,
      uploadState,
      inputs,
      inputsError
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_AdminProduct_AdminProduct_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: 'edit',
      history,
      product,
      uploadState,
      inputs,
      inputsError,
      onSubmit: this.updateProduct,
      onImageSelect: this.uploadImage
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditProductContainer);

/***/ }),

/***/ "./frontend/src/containers/AdminEditUserContainer.js":
/*!***********************************************************!*\
  !*** ./frontend/src/containers/AdminEditUserContainer.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminEditUser_AdminEditUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminEditUser/AdminEditUser.js */ "./frontend/src/components/AdminEditUser/AdminEditUser.js");
/* harmony import */ var _api_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/users.js */ "./frontend/src/api/users.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AdminEditUserContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchUser", async id => {
      const token = this.props.user.token;
      this.setState({
        loading: true
      });
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.fetchUser(token, {
        id
      });

      if (!isError) {
        this.setState({
          loading: false,
          inputs: {
            name: data.name,
            email: data.email,
            isAdmin: data.isAdmin
          },
          error: null
        });
      } else {
        this.setState({
          loading: false,
          error: data
        });
      }
    });

    _defineProperty(this, "updateUser", async ({
      name,
      email,
      isAdmin
    }) => {
      const {
        token
      } = this.props.user;
      const {
        userId
      } = this.props;
      const inputs = {
        name,
        email,
        isAdmin
      };
      this.setState({
        loading: true
      });
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.updateUser(token, {
        id: userId,
        name,
        email,
        isAdmin
      });

      if (!isError) {
        this.setState({
          loading: false,
          formError: null
        });
        this.props.history.push('/admin/users');
      } else {
        this.setState({
          loading: false,
          inputs,
          formError: data
        });
      }
    });

    this.state = {
      inputs: {
        name: '',
        email: '',
        isAdmin: null
      },
      loading: false,
      formError: null,
      error: null
    };
    this.container = document.createElement('div');
    this.initState();
  }

  async initState() {
    const {
      userId
    } = this.props;
    this.fetchUser(userId);
  }

  render() {
    this.container.innerHTML = '';
    const {
      inputs,
      loading,
      formError,
      error
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_components_AdminEditUser_AdminEditUser_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      inputs,
      loading,
      formError,
      error,
      onSubmit: this.updateUser
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditUserContainer);

/***/ }),

/***/ "./frontend/src/containers/AdminOrdersContainer.js":
/*!*********************************************************!*\
  !*** ./frontend/src/containers/AdminOrdersContainer.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminOrders_AdminOrders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminOrders/AdminOrders.js */ "./frontend/src/components/AdminOrders/AdminOrders.js");
/* harmony import */ var _api_orders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/orders.js */ "./frontend/src/api/orders.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AdminOrdersContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchOrders", async () => {
      const token = this.props.user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'orders');
      const {
        isError,
        data
      } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_1__.fetchOrders(token);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'orders', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'orders', data);
      }
    });

    this.state = {
      orders: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  async initState() {
    this.fetchOrders();
  }

  render() {
    this.container.innerHTML = '';
    const {
      orders
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_AdminOrders_AdminOrders_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      orders
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminOrdersContainer);

/***/ }),

/***/ "./frontend/src/containers/AdminProductsContainer.js":
/*!***********************************************************!*\
  !*** ./frontend/src/containers/AdminProductsContainer.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminProducts_AdminProducts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminProducts/AdminProducts.js */ "./frontend/src/components/AdminProducts/AdminProducts.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AdminProductsContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchProductsInfo", async pageNumber => {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'productsInfo');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.fetchProducts('', pageNumber);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'productsInfo', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'productsInfo', data);
      }
    });

    _defineProperty(this, "deleteProduct", async productId => {
      const {
        pageNumber
      } = this.props;
      const token = this.props.user.token;
      this.setState({
        productsInfo: _objectSpread(_objectSpread({}, this.state.productsInfo), {}, {
          loading: true
        })
      });
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.deleteProduct(token, {
        id: productId
      });

      if (!isError) {
        this.fetchProductsInfo(pageNumber);
      } else {
        this.setState({
          productsInfo: _objectSpread(_objectSpread({}, this.state.productsInfo), {}, {
            loading: false,
            error: data
          })
        });
      }
    });

    _defineProperty(this, "handleProductPageClick", async pageNumber => {
      this.props.history.push(`/admin/products/page/${pageNumber}`);
    });

    _defineProperty(this, "handleProductPrevPageClick", async () => {
      const currentPage = this.state.productsInfo.data.page;
      const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
      this.props.history.push(`/admin/products/page/${prevPage}`);
    });

    _defineProperty(this, "handleProductNextPageClick", async () => {
      const currentPage = this.state.productsInfo.data.page;
      const lastPage = this.state.productsInfo.data.pages;
      const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;
      this.props.history.push(`/admin/products/page/${nextPage}`);
    });

    this.state = {
      productsInfo: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  initState() {
    const {
      pageNumber
    } = this.props;
    this.fetchProductsInfo(pageNumber);
  }

  render() {
    this.container.innerHTML = '';
    const {
      productsInfo
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_AdminProducts_AdminProducts_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      productsInfo,
      onDelete: this.deleteProduct,
      onProductPageClick: this.handleProductPageClick,
      onProductPrevPageClick: this.handleProductPrevPageClick,
      onProductNextPageClick: this.handleProductNextPageClick
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProductsContainer);

/***/ }),

/***/ "./frontend/src/containers/AdminUsersContainer.js":
/*!********************************************************!*\
  !*** ./frontend/src/containers/AdminUsersContainer.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_AdminUsers_AdminUsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AdminUsers/AdminUsers.js */ "./frontend/src/components/AdminUsers/AdminUsers.js");
/* harmony import */ var _api_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/users.js */ "./frontend/src/api/users.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AdminUsersContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteUser", async userId => {
      const originUsers = [...this.state.users.data];
      this.setState({
        users: {
          loading: false,
          data: this.state.users.data.filter(user => user._id !== userId),
          error: null
        }
      });
      const token = this.props.user.token;
      const {
        isError
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.deleteUser(token, {
        id: userId
      });

      if (isError) {
        this.setState({
          users: {
            loading: false,
            data: originUsers,
            error: null
          }
        });
      }
    });

    _defineProperty(this, "fetchUsers", async () => {
      const token = this.props.user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'users');
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.fetchUsers(token);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'users', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'users', data);
      }
    });

    this.state = {
      users: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  async initState() {
    this.fetchUsers();
  }

  render() {
    this.container.innerHTML = '';
    const {
      users
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_AdminUsers_AdminUsers_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      users,
      onUserDelete: this.deleteUser
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminUsersContainer);

/***/ }),

/***/ "./frontend/src/containers/CartContainer.js":
/*!**************************************************!*\
  !*** ./frontend/src/containers/CartContainer.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Cart_Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Cart/Cart.js */ "./frontend/src/components/Cart/Cart.js");



class CartContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      items,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick,
      history
    } = this.props;
    const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.qty * item.price, 0);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_components_Cart_Cart_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      cartItems: items,
      totalItems,
      totalPrice,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick,
      history
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContainer);

/***/ }),

/***/ "./frontend/src/containers/HomeContainer.js":
/*!**************************************************!*\
  !*** ./frontend/src/containers/HomeContainer.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Home_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home/Home.js */ "./frontend/src/components/Home/Home.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class HomeContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchProductsInfo", async pageNumber => {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'productsInfo');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.fetchProducts('', pageNumber);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'productsInfo', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'productsInfo', data);
      }
    });

    _defineProperty(this, "handleProductPageClick", async pageNumber => {
      this.props.history.push(`/page/${pageNumber}`);
    });

    _defineProperty(this, "handleProductPrevPageClick", async () => {
      const currentPage = this.state.productsInfo.data.page;
      const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
      this.props.history.push(`/page/${prevPage}`);
    });

    _defineProperty(this, "handleProductNextPageClick", async () => {
      const currentPage = this.state.productsInfo.data.page;
      const lastPage = this.state.productsInfo.data.pages;
      const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;
      this.props.history.push(`/page/${nextPage}`);
    });

    this.state = {
      productsInfo: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  initState() {
    const {
      pageNumber
    } = this.props;
    this.fetchProductsInfo(pageNumber);
  }

  render() {
    this.container.innerHTML = '';
    const {
      productsInfo
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_Home_Home_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      productsInfo,
      onProductPageClick: this.handleProductPageClick,
      onProductPrevPageClick: this.handleProductPrevPageClick,
      onProductNextPageClick: this.handleProductNextPageClick,
      history
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContainer);

/***/ }),

/***/ "./frontend/src/containers/LoginContainer.js":
/*!***************************************************!*\
  !*** ./frontend/src/containers/LoginContainer.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Login_Login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Login/Login.js */ "./frontend/src/components/Login/Login.js");
/* harmony import */ var _api_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/users.js */ "./frontend/src/api/users.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LoginContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "login", async ({
      email,
      password
    }) => {
      this.setState({
        loading: true,
        error: null
      });
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.login({
        email,
        password
      });

      if (!isError) {
        this.props.setUser(data);
        const redirect = decodeURI(this.props.redirect ? this.props.redirect : '/');
        this.props.history.push(redirect);
      } else {
        this.setState({
          inputs: {
            email,
            password
          },
          loading: false,
          error: data
        });
      }
    });

    this.state = {
      inputs: {
        email: '',
        password: ''
      },
      loading: false,
      error: null
    };
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history
    } = this.props;
    const {
      inputs,
      loading,
      error
    } = this.state;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_components_Login_Login_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      inputs,
      onSubmit: this.login,
      loading,
      error
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);

/***/ }),

/***/ "./frontend/src/containers/MyOrdersContainer.js":
/*!******************************************************!*\
  !*** ./frontend/src/containers/MyOrdersContainer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Profile_MyOrdersTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Profile/MyOrdersTable.js */ "./frontend/src/components/Profile/MyOrdersTable.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
/* harmony import */ var _api_orders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/orders.js */ "./frontend/src/api/orders.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MyOrdersContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchOrders", async () => {
      const {
        token
      } = this.props.user;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__.asyncHandler.setLoading.call(this, 'orders');
      const {
        isError,
        data
      } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_2__.fetchMyOrders(token);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__.asyncHandler.setData.call(this, 'orders', data);
      } else {
        this.setError('orders', data);
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__.asyncHandler.setError.call(this, 'orders', data);
      }
    });

    this.state = {
      orders: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  initState() {
    this.fetchOrders();
  }

  render() {
    this.container.innerHTML = '';
    const {
      history
    } = this.props;
    const {
      orders
    } = this.state;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_Profile_MyOrdersTable_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      orders
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyOrdersContainer);

/***/ }),

/***/ "./frontend/src/containers/OrderContainer.js":
/*!***************************************************!*\
  !*** ./frontend/src/containers/OrderContainer.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Order_Order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Order/Order.js */ "./frontend/src/components/Order/Order.js");
/* harmony import */ var _api_orders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/orders.js */ "./frontend/src/api/orders.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class OrderContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "pay", async () => {
      const {
        user,
        orderId
      } = this.props;
      const token = user.token;
      const payInfo = {
        id: orderId,
        status: 'COMPLETED',
        update_time: new Date().toISOString(),
        payer: {
          email_address: user.email
        }
      };
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'order');
      const {
        isError,
        data
      } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_1__.payOrder(token, payInfo);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'order', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'order', data);
      }
    });

    _defineProperty(this, "markDelivered", async () => {
      const {
        user,
        orderId
      } = this.props;
      const token = user.token;
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'order');
      const {
        isError,
        data
      } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_1__.markDeliveredOrder(token, orderId);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'order', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'order', data);
      }
    });

    this.state = {
      order: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  async initState() {
    const {
      user,
      orderId
    } = this.props;
    const token = user.token;
    _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'order');
    const {
      isError,
      data
    } = await _api_orders_js__WEBPACK_IMPORTED_MODULE_1__.fetchOrder(token, orderId);

    if (!isError) {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'order', data);
    } else {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'order', data);
    }
  }

  render() {
    this.container.innerHTML = '';
    const {
      order
    } = this.state;
    const {
      history,
      user,
      orderId
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_Order_Order_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user,
      orderId,
      order,
      onPayPalClick: this.pay,
      onMarkDeliveredClick: this.markDelivered
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderContainer);

/***/ }),

/***/ "./frontend/src/containers/PaymentContainer.js":
/*!*****************************************************!*\
  !*** ./frontend/src/containers/PaymentContainer.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Payment_Payment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Payment/Payment.js */ "./frontend/src/components/Payment/Payment.js");



class PaymentContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      onSubmit
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_components_Payment_Payment_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step: 3,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentContainer);

/***/ }),

/***/ "./frontend/src/containers/PlaceOrderContainer.js":
/*!********************************************************!*\
  !*** ./frontend/src/containers/PlaceOrderContainer.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_PlaceOrder_PlaceOrder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PlaceOrder/PlaceOrder.js */ "./frontend/src/components/PlaceOrder/PlaceOrder.js");



class PlaceOrderContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      cart,
      orderCreationInfo,
      onSubmit
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_components_PlaceOrder_PlaceOrder_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step: 4,
      cart,
      orderCreationInfo,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceOrderContainer);

/***/ }),

/***/ "./frontend/src/containers/ProductContainer.js":
/*!*****************************************************!*\
  !*** ./frontend/src/containers/ProductContainer.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Product_Product_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Product/Product.js */ "./frontend/src/components/Product/Product.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchProduct", async id => {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'product');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.fetchProduct(id);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'product', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'product', data);
      }
    });

    _defineProperty(this, "submitReview", async review => {
      const {
        productId,
        user
      } = this.props;
      const token = user.token;
      this.setState({
        reviewInputs: review,
        product: _objectSpread(_objectSpread({}, this.state.product), {}, {
          loading: true
        })
      });
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.createProductReview(token, {
        productId,
        review
      });

      if (!isError) {
        this.setState({
          reviewInputs: {
            rating: 0,
            comment: '',
            error: ''
          },
          product: _objectSpread(_objectSpread({}, this.state.product), {}, {
            loading: false
          })
        });
        this.fetchProduct(productId);
      } else {
        this.setState({
          reviewInputs: _objectSpread(_objectSpread({}, review), {}, {
            error: data.message
          }),
          product: _objectSpread(_objectSpread({}, this.state.product), {}, {
            loading: false
          })
        });
      }
    });

    this.state = {
      product: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState,
      reviewInputs: {
        rating: 0,
        comment: '',
        error: ''
      }
    };
    this.container = document.createElement('div');
    this.initState();
  }

  initState() {
    const {
      productId
    } = this.props;
    this.fetchProduct(productId);
  }

  render() {
    this.container.innerHTML = '';
    const {
      product,
      reviewInputs
    } = this.state;
    const {
      history,
      onAddBtnClick
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_Product_Product_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      product,
      reviewInputs,
      onAddBtnClick,
      onReviewSubmit: this.submitReview,
      history
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductContainer);

/***/ }),

/***/ "./frontend/src/containers/RegisterContainer.js":
/*!******************************************************!*\
  !*** ./frontend/src/containers/RegisterContainer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Register_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Register/Register.js */ "./frontend/src/components/Register/Register.js");
/* harmony import */ var _api_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/users.js */ "./frontend/src/api/users.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RegisterContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "register", async ({
      name,
      email,
      password,
      confirmPassword
    }) => {
      this.setState({
        loading: true,
        error: null
      });
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_1__.register({
        name,
        email,
        password
      });

      if (!isError) {
        this.props.setUser(data);
        this.props.history.push('/');
      } else {
        this.setState({
          inputs: {
            name,
            email,
            password,
            confirmPassword
          },
          loading: false,
          error: data
        });
      }
    });

    this.state = {
      inputs: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      error: null
    };
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history
    } = this.props;
    const {
      inputs,
      loading,
      error
    } = this.state;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_components_Register_Register_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      inputs,
      onSubmit: this.register,
      loading,
      error
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterContainer);

/***/ }),

/***/ "./frontend/src/containers/SearchResultContainer.js":
/*!**********************************************************!*\
  !*** ./frontend/src/containers/SearchResultContainer.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_SearchResult_SearchResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SearchResult/SearchResult.js */ "./frontend/src/components/SearchResult/SearchResult.js");
/* harmony import */ var _api_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products.js */ "./frontend/src/api/products.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SearchResultContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchProductsInfo", async (keyword, pageNumber) => {
      _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setLoading.call(this, 'productsInfo');
      const {
        isError,
        data
      } = await _api_products_js__WEBPACK_IMPORTED_MODULE_1__.fetchProducts(keyword, pageNumber);

      if (!isError) {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setData.call(this, 'productsInfo', data);
      } else {
        _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncHandler.setError.call(this, 'productsInfo', data);
      }
    });

    _defineProperty(this, "handleProductPageClick", async pageNumber => {
      const {
        keyword
      } = this.props;
      this.props.history.push(`/search/${keyword}/page/${pageNumber}`);
    });

    _defineProperty(this, "handleProductPrevPageClick", async () => {
      const {
        keyword
      } = this.props;
      const currentPage = this.state.productsInfo.data.page;
      const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
      this.props.history.push(`/search/${keyword}/page/${prevPage}`);
    });

    _defineProperty(this, "handleProductNextPageClick", async () => {
      const {
        keyword
      } = this.props;
      const currentPage = this.state.productsInfo.data.page;
      const lastPage = this.state.productsInfo.data.pages;
      const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;
      this.props.history.push(`/search/${keyword}/page/${nextPage}`);
    });

    this.state = {
      productsInfo: _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_2__.asyncInitState
    };
    this.container = document.createElement('div');
    this.initState();
  }

  initState() {
    const {
      keyword,
      pageNumber
    } = this.props;
    this.fetchProductsInfo(keyword, pageNumber);
  }

  render() {
    this.container.innerHTML = '';
    const {
      productsInfo
    } = this.state;
    const {
      history
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_SearchResult_SearchResult_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      productsInfo,
      onProductPageClick: this.handleProductPageClick,
      onProductPrevPageClick: this.handleProductPrevPageClick,
      onProductNextPageClick: this.handleProductNextPageClick,
      history
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultContainer);

/***/ }),

/***/ "./frontend/src/containers/ShippingContainer.js":
/*!******************************************************!*\
  !*** ./frontend/src/containers/ShippingContainer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Shipping_Shipping_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Shipping/Shipping.js */ "./frontend/src/components/Shipping/Shipping.js");



class ShippingContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      shippingAddress,
      onSubmit
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_components_Shipping_Shipping_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      step: 2,
      shippingAddress,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingContainer);

/***/ }),

/***/ "./frontend/src/containers/UserProfileContainer.js":
/*!*********************************************************!*\
  !*** ./frontend/src/containers/UserProfileContainer.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _components_Profile_UserProfileForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Profile/UserProfileForm.js */ "./frontend/src/components/Profile/UserProfileForm.js");
/* harmony import */ var _modules_asyncHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/asyncHandler.js */ "./frontend/src/modules/asyncHandler.js");
/* harmony import */ var _api_users_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/users.js */ "./frontend/src/api/users.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class UserProfileContainer extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateUserProfile", async ({
      name,
      email,
      password,
      confirmPassword
    }) => {
      const {
        token
      } = this.props.user;
      const inputs = {
        name,
        email,
        password,
        confirmPassword
      };
      this.setState({
        loading: true,
        error: null
      });
      const {
        isError,
        data
      } = await _api_users_js__WEBPACK_IMPORTED_MODULE_2__.updateUserProfile(token, {
        name,
        email,
        password
      });

      if (!isError) {
        this.props.setUser(data);
      } else {
        this.setState({
          inputs,
          loading: false,
          error: data
        });
      }
    });

    this.state = {
      inputs: {
        name: props.user.name,
        email: props.user.email,
        password: '',
        confirmPassword: ''
      },
      loading: false,
      error: null
    };
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      inputs,
      loading,
      error
    } = this.state;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)(_components_Profile_UserProfileForm_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      inputs,
      loading,
      error,
      onSubmit: this.updateUserProfile
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileContainer);

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ "./frontend/src/App.js");


console.log('Chova-Shop Start');
(0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_App_js__WEBPACK_IMPORTED_MODULE_0__.default, null, document.querySelector('#app'));

/***/ }),

/***/ "./frontend/src/modules/BrowserRouter.js":
/*!***********************************************!*\
  !*** ./frontend/src/modules/BrowserRouter.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyReact.js */ "./frontend/src/modules/MyReact.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DefaultNotFoundComponent extends _MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const message = document.createElement('h3');
    message.innerText = 'Not Found';
    this.container.appendChild(message);
    return this.container;
  }

}

class BrowserRouter extends _MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  parseCurrentPath() {
    const {
      path,
      routes
    } = this.props;
    let pathKey;
    let params = {};
    let currentPathTokens = path.split('?')[0].split('/');
    currentPathTokens = currentPathTokens.filter(token => !!token);
    const pathKeys = routes.map(route => route.path);

    for (let i = 0; i < pathKeys.length; i++) {
      const key = pathKeys[i];
      let pathTokens = key.split('/');
      pathTokens = pathTokens.filter(token => !!token);
      let isMatch = true;
      const tempParams = {};

      if (currentPathTokens.length === pathTokens.length) {
        currentPathTokens.forEach((currentPathToken, idx) => {
          if (pathTokens[idx].includes(':')) {
            tempParams[pathTokens[idx].replace(':', '')] = currentPathToken;
          } else if (currentPathToken !== pathTokens[idx]) {
            isMatch = false;
          }
        });
      } else {
        isMatch = false;
      }

      if (isMatch) {
        pathKey = key;
        params = _objectSpread({}, tempParams);
        break;
      }
    }

    return {
      pathKey,
      params
    };
  }

  render() {
    this.container.innerHTML = '';
    const {
      routes,
      history
    } = this.props;
    const {
      pathKey,
      params
    } = this.parseCurrentPath();
    const targetRoute = routes.find(route => route.path === pathKey);
    const notFoundRoute = routes.find(route => route.path === '*');
    const route = targetRoute ? targetRoute : notFoundRoute ? notFoundRoute : {
      Component: DefaultNotFoundComponent
    };
    const {
      Component,
      props
    } = route;
    (0,_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.renderComponent)(Component, _objectSpread({
      history,
      match: {
        params
      },
      location: {
        search: location.search
      }
    }, props), this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowserRouter);

/***/ }),

/***/ "./frontend/src/modules/LazyLoad.js":
/*!******************************************!*\
  !*** ./frontend/src/modules/LazyLoad.js ***!
  \******************************************/
/*! namespace exports */
/*! export imageLazyLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageLazyLoad": () => /* binding */ imageLazyLoad
/* harmony export */ });
const imageLazyLoad = imgEl => {
  const options = {
    threshold: 0.1
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.remove('lazy');
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, options);
  io.observe(imgEl);
};

/***/ }),

/***/ "./frontend/src/modules/MyReact.js":
/*!*****************************************!*\
  !*** ./frontend/src/modules/MyReact.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => /* binding */ Component,
/* harmony export */   "renderComponent": () => /* binding */ renderComponent
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    this.state = _objectSpread(_objectSpread({}, this.state), state);
    this.render();
  }

}
const renderComponent = (Component, props, container) => {
  const component = new Component(props);
  container.appendChild(component.render());
};

/***/ }),

/***/ "./frontend/src/modules/asyncHandler.js":
/*!**********************************************!*\
  !*** ./frontend/src/modules/asyncHandler.js ***!
  \**********************************************/
/*! namespace exports */
/*! export asyncHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export asyncInitState [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncHandler": () => /* binding */ asyncHandler,
/* harmony export */   "asyncInitState": () => /* binding */ asyncInitState
/* harmony export */ });
const asyncHandler = {
  setLoading(key) {
    this.setState({
      [key]: {
        loading: true,
        data: null,
        error: null
      }
    });
  },

  setError(key, error) {
    this.setState({
      [key]: {
        loading: false,
        data: null,
        error
      }
    });
  },

  setData(key, data) {
    this.setState({
      [key]: {
        loading: false,
        data,
        error: null
      }
    });
  }

};
const asyncInitState = {
  loading: false,
  data: null,
  error: null
};

/***/ }),

/***/ "./frontend/src/modules/inputValidator.js":
/*!************************************************!*\
  !*** ./frontend/src/modules/inputValidator.js ***!
  \************************************************/
/*! namespace exports */
/*! export validateEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEmail": () => /* binding */ validateEmail
/* harmony export */ });
const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email.trim()).toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ "./frontend/src/modules/queryString.js":
/*!*********************************************!*\
  !*** ./frontend/src/modules/queryString.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const queryString = search => {
  const query = {};
  if (!search) return query;
  const queryStr = search.slice(1);
  const queryArr = queryStr.split('&');
  queryArr.forEach(item => {
    if (item.includes('=')) {
      const [key, value] = item.split('=');
      query[key] = value;
    }
  });
  return query;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryString);

/***/ }),

/***/ "./frontend/src/pages/AdminCreateProductPage.js":
/*!******************************************************!*\
  !*** ./frontend/src/pages/AdminCreateProductPage.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminCreateProductContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminCreateProductContainer.js */ "./frontend/src/containers/AdminCreateProductContainer.js");



class AdminCreateProductPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user
    } = this.props;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminCreateProductContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminCreateProductPage);

/***/ }),

/***/ "./frontend/src/pages/AdminEditProductPage.js":
/*!****************************************************!*\
  !*** ./frontend/src/pages/AdminEditProductPage.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminEditProductContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminEditProductContainer.js */ "./frontend/src/containers/AdminEditProductContainer.js");



class AdminEditProductPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      match,
      user
    } = this.props;
    const productId = match.params.id;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminEditProductContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user,
      productId
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditProductPage);

/***/ }),

/***/ "./frontend/src/pages/AdminEditUserPage.js":
/*!*************************************************!*\
  !*** ./frontend/src/pages/AdminEditUserPage.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminEditUserContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminEditUserContainer.js */ "./frontend/src/containers/AdminEditUserContainer.js");



class AdminEditUserPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      match,
      user
    } = this.props;
    const userId = match.params.id;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminEditUserContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user,
      userId
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditUserPage);

/***/ }),

/***/ "./frontend/src/pages/AdminOrdersPage.js":
/*!***********************************************!*\
  !*** ./frontend/src/pages/AdminOrdersPage.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminOrdersContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminOrdersContainer.js */ "./frontend/src/containers/AdminOrdersContainer.js");



class AdminOrdersPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user
    } = this.props;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminOrdersContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminOrdersPage);

/***/ }),

/***/ "./frontend/src/pages/AdminProductsPage.js":
/*!*************************************************!*\
  !*** ./frontend/src/pages/AdminProductsPage.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminProductsContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminProductsContainer.js */ "./frontend/src/containers/AdminProductsContainer.js");



class AdminProductsPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      match,
      user
    } = this.props;
    const {
      pageNumber
    } = match.params;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminProductsContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      pageNumber,
      user
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProductsPage);

/***/ }),

/***/ "./frontend/src/pages/AdminUsersPage.js":
/*!**********************************************!*\
  !*** ./frontend/src/pages/AdminUsersPage.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_AdminUsersContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/AdminUsersContainer.js */ "./frontend/src/containers/AdminUsersContainer.js");



class AdminUsersPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user
    } = this.props;

    if (!user || !user.isAdmin) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_AdminUsersContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminUsersPage);

/***/ }),

/***/ "./frontend/src/pages/CartPage.js":
/*!****************************************!*\
  !*** ./frontend/src/pages/CartPage.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_CartContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/CartContainer.js */ "./frontend/src/containers/CartContainer.js");



class CartPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      items,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick
    } = this.props;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_CartContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      items,
      onCartItemQtySelect,
      onCartItemDeleteBtnClick,
      history
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);

/***/ }),

/***/ "./frontend/src/pages/HomePage.js":
/*!****************************************!*\
  !*** ./frontend/src/pages/HomePage.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_HomeContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/HomeContainer.js */ "./frontend/src/containers/HomeContainer.js");



class HomePage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      match
    } = this.props;
    const pageNumber = match.params.pageNumber;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_HomeContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      pageNumber
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./frontend/src/pages/LoginPage.js":
/*!*****************************************!*\
  !*** ./frontend/src/pages/LoginPage.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_LoginContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/LoginContainer.js */ "./frontend/src/containers/LoginContainer.js");
/* harmony import */ var _modules_queryString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/queryString.js */ "./frontend/src/modules/queryString.js");




class LoginPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      setUser
    } = this.props;
    const query = (0,_modules_queryString_js__WEBPACK_IMPORTED_MODULE_2__.default)(this.props.location.search);

    if (user) {
      history.push('/');
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_LoginContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      setUser,
      redirect: query.redirect
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ }),

/***/ "./frontend/src/pages/NotFoundPage.js":
/*!********************************************!*\
  !*** ./frontend/src/pages/NotFoundPage.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NotFoundPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "goBack", e => {
      e.preventDefault();
      this.props.history.goBack();
    });

    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  render() {
    this.container.innerHTML = '';
    const goBackBtn = document.createElement('a');
    goBackBtn.className = 'btn btn-light my-3';
    goBackBtn.setAttribute('href', '/');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', this.goBack);
    this.container.appendChild(goBackBtn);
    const message = document.createElement('h1');
    message.className = 'text-center';
    message.innerText = 'Page Not Found';
    this.container.appendChild(message);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./frontend/src/pages/OrderPage.js":
/*!*****************************************!*\
  !*** ./frontend/src/pages/OrderPage.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_OrderContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/OrderContainer.js */ "./frontend/src/containers/OrderContainer.js");



class OrderPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user
    } = this.props;
    const orderId = this.props.match.params.id;

    if (!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_OrderContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      user,
      orderId
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPage);

/***/ }),

/***/ "./frontend/src/pages/PaymentPage.js":
/*!*******************************************!*\
  !*** ./frontend/src/pages/PaymentPage.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_PaymentContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/PaymentContainer.js */ "./frontend/src/containers/PaymentContainer.js");



class PaymentPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      onSubmit
    } = this.props;

    if (!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_PaymentContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentPage);

/***/ }),

/***/ "./frontend/src/pages/PlaceOrderPage.js":
/*!**********************************************!*\
  !*** ./frontend/src/pages/PlaceOrderPage.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_PlaceOrderContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/PlaceOrderContainer.js */ "./frontend/src/containers/PlaceOrderContainer.js");



class PlaceOrderPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      cart,
      orderCreationInfo,
      onSubmit
    } = this.props;

    if (!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_PlaceOrderContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      cart,
      orderCreationInfo,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceOrderPage);

/***/ }),

/***/ "./frontend/src/pages/ProductPage.js":
/*!*******************************************!*\
  !*** ./frontend/src/pages/ProductPage.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_ProductContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/ProductContainer.js */ "./frontend/src/containers/ProductContainer.js");



class ProductDetailPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      user,
      history,
      onAddBtnClick
    } = this.props;
    const productId = this.props.match.params.id;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_ProductContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      user,
      history,
      productId,
      onAddBtnClick
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);

/***/ }),

/***/ "./frontend/src/pages/ProfilePage.js":
/*!*******************************************!*\
  !*** ./frontend/src/pages/ProfilePage.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_UserProfileContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/UserProfileContainer.js */ "./frontend/src/containers/UserProfileContainer.js");
/* harmony import */ var _containers_MyOrdersContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/MyOrdersContainer.js */ "./frontend/src/containers/MyOrdersContainer.js");




class ProfilePage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      setUser
    } = this.props;

    if (!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    const profileCol = document.createElement('div');
    profileCol.className = 'col-md-3';
    row.appendChild(profileCol);
    const profileTitle = document.createElement('h2');
    profileTitle.innerText = 'User Profile';
    profileCol.appendChild(profileTitle);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_containers_UserProfileContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      user,
      setUser
    }, profileCol);
    const ordersCol = document.createElement('div');
    ordersCol.className = 'col-md-9';
    row.appendChild(ordersCol);
    const ordersTitle = document.createElement('h2');
    ordersTitle.innerText = 'My Orders';
    ordersCol.appendChild(ordersTitle);
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_2__.renderComponent)(_containers_MyOrdersContainer_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      history,
      user
    }, ordersCol);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./frontend/src/pages/RegisterPage.js":
/*!********************************************!*\
  !*** ./frontend/src/pages/RegisterPage.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_RegisterContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/RegisterContainer.js */ "./frontend/src/containers/RegisterContainer.js");



class RegisterPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      setUser
    } = this.props;

    if (user) {
      history.push('/');
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_RegisterContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      setUser
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

/***/ }),

/***/ "./frontend/src/pages/SearchResultPage.js":
/*!************************************************!*\
  !*** ./frontend/src/pages/SearchResultPage.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_SearchResultContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/SearchResultContainer.js */ "./frontend/src/containers/SearchResultContainer.js");



class SearchResultPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      match
    } = this.props;
    const {
      keyword,
      pageNumber
    } = match.params;
    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_SearchResultContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      keyword,
      pageNumber
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultPage);

/***/ }),

/***/ "./frontend/src/pages/ShippingPage.js":
/*!********************************************!*\
  !*** ./frontend/src/pages/ShippingPage.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MyReact.js */ "./frontend/src/modules/MyReact.js");
/* harmony import */ var _containers_ShippingContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/ShippingContainer.js */ "./frontend/src/containers/ShippingContainer.js");



class ShippingPage extends _modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';
    const {
      history,
      user,
      shippingAddress,
      onSubmit
    } = this.props;

    if (!user) {
      history.push(`/login?redirect=${location.pathname}`);
      return this.container;
    }

    (0,_modules_MyReact_js__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(_containers_ShippingContainer_js__WEBPACK_IMPORTED_MODULE_0__.default, {
      history,
      shippingAddress,
      onSubmit
    }, this.container);
    return this.container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./frontend/src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map