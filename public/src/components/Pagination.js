import { Component } from '../modules/MyReact.js';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('ul');
    this.container.className = 'pagination justify-content-center';
  }

  render() {
    const { page, pages } = this.props;

    const startPage = page - 3 > 0 ? page - 3 : 1;
    const lastPage = page + 3 <= pages ? page + 3 : pages;

    console.log({startPage, lastPage});

    this.container.innerHTML = `
      <span><i class="fas fa-caret-left"></i></span>
      ${
        Array(lastPage - startPage + 1).fill('').map((_, idx) => {
          const currentPage = idx + startPage;
          const isActivePage = page === currentPage;
          return `
            <li class="${isActivePage ? 'page-item active' : 'page-item'}">
              ${isActivePage ? `
              <span class="page-link" href="/admin/productlist/${currentPage}">${currentPage}<span class="sr-only">(current)</span></span>
              ` : `
              <a class="page-link" href="/admin/productlist/${currentPage}">${currentPage}</a>
              `}
            </li>
          `;
        }).join('')
      }
      <span><i class="fas fa-caret-right"></i></span>
    `;
    
    return this.container;
  }
}

export default Pagination;
