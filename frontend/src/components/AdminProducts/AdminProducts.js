import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import ProductsTitle from './ProductsTitle.js';
import ProductsTable from './ProductsTable.js';
import Pagination from '../Pagination.js';

class AdminProducts extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const {
      productsInfo: { loading, data, error },
      history,
      onDelete,
      onProductPageClick,
      onProductPrevPageClick,
      onProductNextPageClick,
    } = this.props;

    renderComponent(ProductsTitle, { history }, container);

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        container
      );
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      container.appendChild(errorEl);

      return this.container;
    }
    if (!data) return this.container;

    const { products, page, pages } = data;    

    if(products.length === 0) {
      const noResultAlert = document.createElement('div');
      noResultAlert.className = 'alert alert-light';
      noResultAlert.innerText = 'No Results';
      container.appendChild(noResultAlert);
    } else {
      renderComponent(ProductsTable, { history, products, onDelete }, container);
    }

    if(pages > 1) {
      renderComponent(
        Pagination, 
        { 
          page, 
          pages, 
          pagesMargin: 3,          
          onPageClick: onProductPageClick, 
          onPrevClick: onProductPrevPageClick, 
          onNextClick: onProductNextPageClick,
          history,
        }, 
        container
      );
    }    

    return this.container;
  }
}

export default AdminProducts;
