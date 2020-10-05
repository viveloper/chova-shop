import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductList from '../components/ProductList.js';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
  }

  render() {
    this.container.innerHTML = '';

    const { history } = this.props;

    renderComponent(Header, { history }, this.container);

    const title = document.createElement('h1');
    title.innerText = 'Product List';
    this.container.appendChild(title);

    renderComponent(
      ProductList,
      { products: [{ name: 'D850' }, { name: 'D5' }] },
      this.container
    );
    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default ProductsPage;
