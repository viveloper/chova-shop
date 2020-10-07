import { Component, renderComponent } from '../modules/MyReact.js';
import Rating from './Rating.js';

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.props;

    const listGroupItem1 = document.createElement('div');
    listGroupItem1.className = 'list-group-item';
    this.container.appendChild(listGroupItem1);

    const title = document.createElement('h3');
    title.innerText = product.name;
    listGroupItem1.appendChild(title);

    const listGroupItem2 = document.createElement('div');
    listGroupItem2.className = 'list-group-item';
    this.container.appendChild(listGroupItem2);

    renderComponent(
      Rating,
      { value: product.rating, text: `${product.numReviews} reviews` },
      listGroupItem2
    );

    const listGroupItem3 = document.createElement('div');
    listGroupItem3.className = 'list-group-item';
    listGroupItem3.innerText = `Price: $${product.price}`;
    this.container.appendChild(listGroupItem3);

    const listGroupItem4 = document.createElement('div');
    listGroupItem4.className = 'list-group-item';
    listGroupItem4.innerText = `Description: ${product.description}`;
    this.container.appendChild(listGroupItem4);

    return this.container;
  }
}

export default ProductInfo;
