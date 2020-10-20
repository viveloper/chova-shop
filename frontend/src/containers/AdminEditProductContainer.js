import { Component, renderComponent } from '../modules/MyReact.js';
import AdminEditProduct from '../components/AdminEditProduct/AdminEditProduct.js';
import * as productsApi from '../api/products.js';
import * as uploadApi from '../api/upload.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminEditProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: '', 
        price: '', 
        image: '', 
        brand: '', 
        countInStock: '', 
        category: '', 
        description: '',
        error: null,
        uploadLoading: false,
      },
      loading: false,
      error: null,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    this.fetchProduct(productId);
  }

  fetchProduct = async (id) => {    
    this.setState({
      loading: true,
    });
    const { isError, data } = await productsApi.fetchProduct(id);
    if (!isError) {
      this.setState({
        loading: false,
        inputs: {
          name: data.name, 
          price: data.price, 
          image: data.image, 
          brand: data.brand, 
          countInStock: data.countInStock, 
          category: data.category, 
          description: data.description,
          error: null,
          uploadLoading: false,
        },
        error: null,
      });
    } else {
      this.setState({
        loading: false,
        error: data,
      });
    }
  }

  updateProduct = async (product) => {
    const token = this.props.user.token;
    const { productId } = this.props;
    this.setState({
      loading: true,
    });
    const { isError, data } = await productsApi.updateProduct(token, { id: productId, ...product });
    if (!isError) {
      this.setState({
        loading: false,
        inputs: {
          name: data.name, 
          price: data.price, 
          image: data.image, 
          brand: data.brand, 
          countInStock: data.countInStock, 
          category: data.category, 
          description: data.description,
          error: null,
          uploadLoading: false,
        },
        error: null,
      });
      this.props.history.push('/admin/products');
    } else {
      this.setState({
        loading: false,
        inputs: {
          ...product,
          error: data,
        },
      });
    }
  }

  uploadImage = async (file, product) => {
    const token = this.props.user.token;
    this.setState({
      inputs: {
        ...product,
        uploadLoading: true,
      }
    });
    const { isError, data } = await uploadApi.uploadImage(file, token);
    if (!isError) {
      this.setState({
        inputs: {
          ...product,          
          uploadLoading: false,
          image: data,
        }
      });      
    } else {
      this.setState({
        inputs: {
          ...product,
          uploadLoading: false,
          error: data,
        }
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { inputs, loading, error } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminEditProduct, 
      { 
        history, 
        inputs,
        loading,
        error,
        onSubmit: this.updateProduct,
        onImageSelect: this.uploadImage,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminEditProductContainer;
