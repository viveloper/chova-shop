import { Component, renderComponent } from '../modules/MyReact.js';
import Rating from './Rating.js';
import Loader from './Loader.js';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.container = document.createElement('div');
    this.container.className = 'row';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';

    const {
      products: { loading, data, error },
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
        this.container
      );
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error;
      this.container.appendChild(errorEl);

      return this.container;
    }
    if (!data) return this.container;

    data.forEach((product) => {
      const col = document.createElement('div');
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';
      this.container.appendChild(col);

      const card = document.createElement('div');
      card.className = 'my-3 p-3 rounded card';
      col.appendChild(card);

      const imageLink = document.createElement('a');
      imageLink.setAttribute('href', `/products/${product._id}`);
      imageLink.addEventListener('click', (e) =>
        this.handleLinkClick(e, `/products/${product._id}`)
      );
      card.appendChild(imageLink);

      const image = document.createElement('img');
      image.className = 'card-img-top';
      image.src = product.image;
      imageLink.appendChild(image);

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      card.appendChild(cardBody);

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
    });

    return this.container;
  }
}

export default ProductList;
