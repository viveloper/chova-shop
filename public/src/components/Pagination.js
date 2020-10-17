import { Component } from '../modules/MyReact.js';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('ul');
    this.container.className = 'pagination justify-content-center align-items-center';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    const { onPageClick, onPrevClick, onNextClick } = this.props;
    if(e.target.dataset.onclick === 'onPageClick') {
      e.preventDefault();
      const pageNumber = e.target.dataset.page;      
      onPageClick(pageNumber);
      return;
    }
    if(e.target.dataset.onclick === 'onPrevClick') {
      e.preventDefault();      
      onPrevClick();
      return;
    }
    if(e.target.dataset.onclick === 'onNextClick') {
      e.preventDefault();
      onNextClick();
      return;
    }
  }

  render() {
    const { page, pages, pagesMargin } = this.props;   
    let startPage = page - pagesMargin > 0 ? page - pagesMargin : 1;
    let lastPage = startPage + (pagesMargin * 2) <= pages ? startPage + (pagesMargin * 2) : pages;
    if(lastPage === pages) startPage = lastPage - (pagesMargin * 2) > 0 ? lastPage - (pagesMargin * 2) : 1;

    this.container.innerHTML = `
      ${startPage > 1 ? `
        <span class="btn py-1 px-2" data-onclick="onPrevClick"><i class="fas fa-caret-left" data-onclick="onPrevClick"></i></span>
      ` : ''}
      ${
        Array(lastPage - startPage + 1).fill('').map((_, idx) => {
          const currentPage = idx + startPage;
          const isActivePage = page === currentPage;
          return `
            <li class="${isActivePage ? 'page-item active' : 'page-item'}">
              ${isActivePage ? `
              <span class="page-link" href="#">${currentPage}<span class="sr-only">(current)</span></span>
              ` : `
              <a class="page-link" href="#" data-onclick="onPageClick" data-page="${currentPage}">${currentPage}</a>
              `}
            </li>
          `;
        }).join('')
      }
      ${lastPage < pages ? `
        <span class="btn py-1 px-2" data-onclick="onNextClick"><i class="fas fa-caret-right" data-onclick="onNextClick"></i></span> 
        ` : ''}      
    `;
    
    return this.container;
  }
}

export default Pagination;
