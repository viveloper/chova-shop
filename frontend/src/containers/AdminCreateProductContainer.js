import { Component, renderComponent } from '../modules/MyReact.js';
import AdminCreateProduct from '../components/AdminCreateProduct/AdminCreateProduct.js';
import * as productsApi from '../api/products.js';
import * as uploadApi from '../api/upload.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminCreateProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        loading: false,
        data: {
          name: '', 
          price: '', 
          image: '/images/sample.jpg', 
          brand: '', 
          countInStock: '', 
          category: '', 
          description: '',
        },
        error: null,
      },
    };

    this.container = document.createElement('div');
  }

  createProduct = async (product) => {
    const token = this.props.user.token;
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await productsApi.createProduct(token, product);
    if (!isError) {
      asyncHandler.setData.call(this, 'product', data);
      this.props.history.push('/admin/products');
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  uploadImage = async (file, product) => {
    const token = this.props.user.token;
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
      AdminCreateProduct, 
      { 
        history, 
        product,
        onSubmit: this.createProduct,
        onImageSelect: this.uploadImage,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminCreateProductContainer;
