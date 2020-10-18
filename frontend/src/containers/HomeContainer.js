import { Component, renderComponent } from '../modules/MyReact.js';
import Home from '../components/Home/Home.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInfo: asyncInitState,     
    };

    this.container = document.createElement('div');

    this.initState();
  }

  initState() {
    const { pageNumber } = this.props;
    this.fetchProductsInfo(pageNumber);  
  }

  fetchProductsInfo = async (pageNumber) => {
    asyncHandler.setLoading.call(this, 'productsInfo');
    const { isError, data } = await productsApi.fetchProducts('', pageNumber);
    if (!isError) {
      asyncHandler.setData.call(this, 'productsInfo', data);
    } else {      
      asyncHandler.setError.call(this, 'productsInfo', data);
    }
  }

  handleProductPageClick = async (pageNumber) => {        
    this.props.history.push(`/page/${pageNumber}`);
  }

  handleProductPrevPageClick = async () => {
    const currentPage = this.state.productsInfo.data.page;
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;    
    this.props.history.push(`/page/${prevPage}`);
  }

  handleProductNextPageClick = async () => {
    const currentPage = this.state.productsInfo.data.page;
    const lastPage = this.state.productsInfo.data.pages;
    const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;        
    this.props.history.push(`/page/${nextPage}`);
  }

  render() {
    this.container.innerHTML = '';

    const { productsInfo } = this.state;
    const { history } = this.props;

    renderComponent(
      Home, 
      { 
        productsInfo,
        onProductPageClick: this.handleProductPageClick,
        onProductPrevPageClick: this.handleProductPrevPageClick,
        onProductNextPageClick: this.handleProductNextPageClick,
        history 
      }, 
      this.container
    );

    return this.container;
  }
}

export default HomeContainer;
