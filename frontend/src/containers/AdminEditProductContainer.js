import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditProduct from '../components/AdminEditProduct/AdminEditProduct.js';
import * as productsApi from '../api/products.js';
import * as uploadApi from '../api/upload.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminEditProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    this.fetchProduct(productId);
  }

  fetchProduct = async (id) => {
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await productsApi.fetchProduct(id);
    if (!isError) {
      asyncHandler.setData.call(this, 'product', data);
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  updateProduct = async (product) => {
    const token = this.props.user.data.token;
    const { productId } = this.props;
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await productsApi.updateProduct(token, { id: productId, ...product });
    if (!isError) {
      asyncHandler.setData.call(this, 'product', data);
      this.props.history.push('/admin/products');
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  uploadImage = async (file, product) => {
    const token = this.props.user.data.token;
    this.setState({
      product: {
        loading: true,
        data: { 
          ...product,
        },
        error: null,
      }
    });
    const { isError, data } = await uploadApi.uploadImage(file, token);
    if (!isError) {
      this.setState({
        product: {
          loading: false,
          data: {
            ...product,
            image: data,
          },
          error: null,
        }
      });
    } else {
      this.setState({
        product: {
          loading: false,
          data: {
            ...product,
          },
          error: data,
        }
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminEditProduct, 
      { 
        history, 
        product,
        onSubmit: this.updateProduct,
        onImageSelect: this.uploadImage,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminEditProductContainer;
