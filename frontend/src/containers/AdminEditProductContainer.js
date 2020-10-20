import { Component, renderComponent } from '../modules/MyReact.js';
import AdminProduct from '../components/AdminProduct/AdminProduct.js';
import * as productsApi from '../api/products.js';
import * as uploadApi from '../api/upload.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminEditProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
      uploadState: asyncInitState,
      inputs: {
        name: '', 
        price: '', 
        image: '', 
        brand: '', 
        countInStock: '', 
        category: '', 
        description: '',
      },
      inputsError: null,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await productsApi.fetchProduct(productId);
    if (!isError) {
      this.setState({
        product: {
          loading: false,
          data,
          error: null,
        },
        inputs: {
          name: data.name, 
          price: data.price, 
          image: data.image, 
          brand: data.brand, 
          countInStock: data.countInStock, 
          category: data.category, 
          description: data.description,
        }
      });
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  updateProduct = async (product) => {
    const token = this.props.user.token;
    const { productId } = this.props;
    
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await productsApi.updateProduct(token, { id: productId, ...product });
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
        type: 'edit',
        history, 
        product,
        uploadState,
        inputs,
        inputsError,
        onSubmit: this.updateProduct,
        onImageSelect: this.uploadImage,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminEditProductContainer;
