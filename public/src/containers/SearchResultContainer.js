import { Component, renderComponent } from '../modules/MyReact.js';
import SearchResult from '../components/SearchResult/SearchResult.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInfo: asyncInitState,
    };

    this.container = document.createElement('div');

    this.initState();
  }

  initState() {
    const { keyword, pageNumber } = this.props;
    this.fetchProductsInfo(keyword, pageNumber);
  }

  fetchProductsInfo = async (keyword, pageNumber) => {
    asyncHandler.setLoading.call(this, 'productsInfo');
    const { isError, data } = await productsApi.fetchProducts(keyword, pageNumber);
    if (!isError) {
      asyncHandler.setData.call(this, 'productsInfo', data);
    } else {
      asyncHandler.setError.call(this, 'productsInfo', data);
    }
  }

  handleProductPageClick = async (pageNumber) => {   
    const { keyword } = this.props;
    this.props.history.push(`/search/${keyword}/page/${pageNumber}`);
  }

  handleProductPrevPageClick = async () => {
    const { keyword } = this.props;
    const currentPage = this.state.productsInfo.data.page;
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;    
    this.props.history.push(`/search/${keyword}/page/${prevPage}`);
  }

  handleProductNextPageClick = async () => {
    const { keyword } = this.props;
    const currentPage = this.state.productsInfo.data.page;
    const lastPage = this.state.productsInfo.data.pages;
    const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;        
    this.props.history.push(`/search/${keyword}/page/${nextPage}`);
  }

  render() {
    this.container.innerHTML = '';

    const { productsInfo } = this.state;
    const { history } = this.props;

    renderComponent(
      SearchResult, 
      { 
        productsInfo,
        onProductPageClick: this.handleProductPageClick,
        onProductPrevPageClick: this.handleProductPrevPageClick,
        onProductNextPageClick: this.handleProductNextPageClick,
        history,
      }, 
      this.container
    );

    return this.container;
  }
}

export default SearchResultContainer;
