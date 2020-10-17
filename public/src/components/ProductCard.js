import { Component, renderComponent } from '../modules/MyReact.js';
import Rating from './Rating.js';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.container = document.createElement('div');
    this.container.className = 'my-3 p-3 rounded card';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.props;

    const imageLink = document.createElement('a');
    imageLink.setAttribute('href', `/products/${product._id}`);
    imageLink.addEventListener('click', (e) =>
      this.handleLinkClick(e, `/products/${product._id}`)
    );
    this.container.appendChild(imageLink);

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = product.image;
    imageLink.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    this.container.appendChild(cardBody);

    const titleLink = document.createElement('a');
    titleLink.setAttribute('href', `/products/${product._id}`);
    titleLink.addEventListener('click', (e) =>
      this.handleLinkClick(e, `/products/${product._id}`)
    );
    cardBody.appendChild(titleLink);

    const title = document.createElement('strong');
    title.innerText = product.name;
    titleLink.appendChild(title);

    const cardText = document.createElement('div');
    cardBody.appendChild(cardText);

    renderComponent(
      Rating,
      { value: product.rating, text: `${product.numReviews} reviews` },
      cardText
    );

    const price = document.createElement('h3');
    price.className = 'card-text';
    price.innerText = `$${product.price}`;
    cardBody.appendChild(price);

    return this.container;
  }
}

export default ProductCard;
