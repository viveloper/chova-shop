import { Component, renderComponent } from '../modules/MyReact.js';
import Product from '../components/Product/Product.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
      reviewInputs: {
        rating: 0,
        comment: '',
        error: '',
      }
    };

    this.container = document.createElement('div');

    this.initState();
  }

  initState() {
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

  submitReview = async (review) => {
    const { productId, user } = this.props;
    const token = user.token;
    this.setState({
      reviewInputs: review,
      product: {
        ...this.state.product,
        loading: true,
      }
    });
    const { isError, data } = await productsApi.createProductReview(token, { productId, review });
    if (!isError) {
      this.setState({
        reviewInputs: {
          rating: 0,
          comment: '',
          error: '',
        },
        product: {
          ...this.state.product,
          loading: false,
        }
      });
      this.fetchProduct(productId);
    } else {
      this.setState({
        reviewInputs: {
          ...review,
          error: data.message,
        },
        product: {
          ...this.state.product,
          loading: false,
        }
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { product, reviewInputs } = this.state;
    const { history, addCartItem } = this.props;

    renderComponent(
      Product, 
      { 
        product, 
        addCartItem, 
        reviewInputs, 
        onReviewSubmit : this.submitReview, 
        history 
      }, 
      this.container
    );

    return this.container;
  }
}

export default ProductContainer;
