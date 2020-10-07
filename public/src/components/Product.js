import { Component, renderComponent } from '../modules/MyReact.js';
import Loader from './Loader.js';
import ProductInfo from './ProductInfo.js';
import CartButtonCard from './CartButtonCard.js';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const {
      product: { loading, data, error },
      history,
    } = this.props;

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

    const goBackBtn = document.createElement('a');
    goBackBtn.className = 'btn btn-light my-3';
    goBackBtn.setAttribute('href', '/');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', (e) => this.handleLinkClick(e, `/`));
    container.appendChild(goBackBtn);

    const productDetailRow = document.createElement('div');
    productDetailRow.className = 'row';
    container.appendChild(productDetailRow);

    const imageCol = document.createElement('div');
    imageCol.className = 'col-md-6';
    productDetailRow.appendChild(imageCol);

    const productImg = document.createElement('img');
    productImg.className = 'img-fluid';
    productImg.alt = data.name;
    productImg.src = data.image;
    imageCol.appendChild(productImg);

    const infoCol = document.createElement('div');
    infoCol.className = 'col-md-3';
    productDetailRow.appendChild(infoCol);

    renderComponent(ProductInfo, { product: data }, infoCol);

    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-3';
    productDetailRow.appendChild(cardCol);

    renderComponent(CartButtonCard, { product: data }, cardCol);

    const reviewsRow = document.createElement('div');
    reviewsRow.className = 'row';
    container.appendChild(reviewsRow);

    return this.container;
  }
}

export default Product;
