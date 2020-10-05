import { Component, renderComponent } from '../modules/MyReact.js';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('ul');
    this.container.className = 'product-list';
  }

  render() {
    const { products } = this.props;

    this.container.innerHTML = `
      ${products
        .map((product) => `<li><span>${product.name}</span></li>`)
        .join('')}
    `;

    return this.container;
  }
}

export default ProductList;
