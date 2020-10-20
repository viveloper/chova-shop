import { Component, renderComponent } from '../modules/MyReact.js';
import AdminProduct from '../components/AdminProduct/AdminProduct.js';
import * as productsApi from '../api/products.js';
import * as uploadApi from '../api/upload.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminCreateProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
      uploadState: asyncInitState,
      inputs: {
        name: '', 
        price: '', 
        image: '/images/sample.jpg', 
        brand: '', 
        countInStock: '', 
        category: '', 
        description: '',
      },
      inputsError: null,
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
      this.setState({
        product: {
          loading: false,
          error: data,
        },
        inputs: {
          name: product.name, 
          price: product.price, 
          image: product.image, 
          brand: product.brand, 
          countInStock: product.countInStock, 
          category: product.category, 
          description: product.description,
        },
        inputsError: data,
      });
    }
  }

  uploadImage = async (file, product) => {
    const token = this.props.user.token;
    asyncHandler.setLoading.call(this, 'uploadState');
    const { isError, data } = await uploadApi.uploadImage(file, token);
    if (!isError) {
      this.setState({
        uploadState: {
          loading: false,
        },
        inputs: {
          name: product.name, 
          price: product.price, 
          image: data, 
          brand: product.brand, 
          countInStock: product.countInStock, 
          category: product.category, 
          description: product.description,
        },
      })
    } else {
      this.setState({
        uploadState: {
          loading: false,
        },
        inputs: {
          name: product.name, 
          price: product.price, 
          image: product.image, 
          brand: product.brand, 
          countInStock: product.countInStock, 
          category: product.category, 
          description: product.description,
        },
        inputsError: data,
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { product, uploadState, inputs, inputsError } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminProduct, 
      { 
        type: 'create',
        history, 
        product,
        uploadState,
        inputs,
        inputsError,
        onSubmit: this.createProduct,
        onImageSelect: this.uploadImage,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminCreateProductContainer;
