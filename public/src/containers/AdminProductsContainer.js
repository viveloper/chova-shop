import { Component, renderComponent } from '../modules/MyReact.js';
import AdminProducts from '../components/AdminProducts/AdminProducts.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    asyncHandler.setLoading.call(this, 'products');
    const { isError, data } = await productsApi.fetchProducts();
    if (!isError) {
      asyncHandler.setData.call(this, 'products', data.products);
    } else {
      asyncHandler.setError.call(this, 'products', data);
    }
  }

  deleteProduct = async (productId) => {
    const originProducts = [...this.state.products.data];

    this.setState({
      products: {
        loading: false,
        data: this.state.products.data.filter((product) => product._id !== productId),
        error: null,
      } 
    });

    const token = this.props.user.data.token;
    const { isError } = await productsApi.deleteProduct(token, { id: productId });
    if(isError) {
      this.setState({
        products: {
          loading: false,
          data: originProducts,
          error: null,
        }
      })
    }
  }

  render() {
    this.container.innerHTML = '';

    const { products } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminProducts,
      { 
        history, 
        products, 
        onDelete: this.deleteProduct 
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminProductsContainer;
