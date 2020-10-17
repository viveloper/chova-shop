import { Component, renderComponent } from '../modules/MyReact.js';
import SearchResult from '../components/SearchResult/SearchResult.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  initState() {
    const { keyword } = this.props;
    this.fetchProducts(keyword);
  }

  fetchProducts = async (keyword) => {
    asyncHandler.setLoading.call(this, 'products');
    const { isError, data } = await productsApi.fetchProducts(keyword);
    if (!isError) {
      asyncHandler.setData.call(this, 'products', data.products);
    } else {
      asyncHandler.setError.call(this, 'products', data);
    }
  }

  render() {
    this.container.innerHTML = '';

    const { products } = this.state;
    const { history } = this.props;

    renderComponent(
      SearchResult, 
      { 
        products, 
        history,
      }, 
      this.container
    );

    return this.container;
  }
}

export default SearchResultContainer;
