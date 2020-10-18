import { Component, renderComponent } from '../modules/MyReact.js';
import AdminProducts from '../components/AdminProducts/AdminProducts.js';
import * as productsApi from '../api/products.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';

class AdminProductsContainer extends Component {
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

  deleteProduct = async (productId) => {
    const { pageNumber } = this.props;
    const token = this.props.user.token;

    this.setState({
      productsInfo: {
        ...this.state.productsInfo,
        loading: true,
      }
    });
    const { isError, data } = await productsApi.deleteProduct(token, { id: productId });
    if(!isError) {      
      this.fetchProductsInfo(pageNumber);
    } else {
      this.setState({
        productsInfo: {
          ...this.state.productsInfo,
          loading: false,
          error: data
        }
      });
    }
  }

  handleProductPageClick = async (pageNumber) => {       
    this.props.history.push(`/admin/products/page/${pageNumber}`);
  }

  handleProductPrevPageClick = async () => {    
    const currentPage = this.state.productsInfo.data.page;
    const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;    
    this.props.history.push(`/admin/products/page/${prevPage}`);
  }

  handleProductNextPageClick = async () => {    
    const currentPage = this.state.productsInfo.data.page;
    const lastPage = this.state.productsInfo.data.pages;
    const nextPage = currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;        
    this.props.history.push(`/admin/products/page/${nextPage}`);
  }

  render() {
    this.container.innerHTML = '';

    const { productsInfo } = this.state;
    const { history } = this.props;

    renderComponent(
      AdminProducts,
      { 
        history, 
        productsInfo, 
        onDelete: this.deleteProduct,
        onProductPageClick: this.handleProductPageClick,
        onProductPrevPageClick: this.handleProductPrevPageClick,
        onProductNextPageClick: this.handleProductNextPageClick,
      }, 
      this.container
    );

    return this.container;
  }
}

export default AdminProductsContainer;
