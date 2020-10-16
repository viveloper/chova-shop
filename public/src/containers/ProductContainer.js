import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from '../components/Loader.js';
import Product from '../components/Product/Product.js';
import { fetchProduct } from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: asyncInitState,
      reviewInputs: {
        rating: 0,
        comment: '',
      }
    };

    this.container = document.createElement('div');

    this.initState();
  }

  async initState() {
    const { productId } = this.props;
    asyncHandler.setLoading.call(this, 'product');
    const { isError, data } = await fetchProduct(productId);
    if (!isError) {
      asyncHandler.setData.call(this, 'product', data);
    } else {
      asyncHandler.setError.call(this, 'product', data);
    }
  }

  submitReview = async (review) => {
    this.setState({
      reviewInputs: review,
    });
    console.log(review);
    // [ToDo]
    // : call createReview api
    // : fetch product and setState
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
