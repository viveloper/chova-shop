import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import ProductCard from '../ProductCard.js';
import Pagination from '../Pagination.js';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';    

    const {
      productsInfo: { loading, data, error },
      onProductPageClick,
      onProductPrevPageClick,
      onProductNextPageClick,
      history,
    } = this.props;

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const btnGoBack = document.createElement('span');
    btnGoBack.className = 'btn btn-light my-3';
    btnGoBack.innerText = 'Go Back';
    btnGoBack.addEventListener('click', () => history.goBack());
    container.appendChild(btnGoBack);

    const title = document.createElement('h1');
    title.innerText = 'Products';
    container.appendChild(title);

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

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    products.forEach((product) => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      row.appendChild(col);

      renderComponent(ProductCard, { product, history }, col);
    });

    if(data.length === 0) {
      const noResultAlert = document.createElement('div');
      noResultAlert.className = 'alert alert-light';
      noResultAlert.innerText = 'No Results';
      row.appendChild(noResultAlert);
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

export default SearchResult;
