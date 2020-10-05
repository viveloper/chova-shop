import { Component, renderComponent } from '../modules/MyReact.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('main');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match, location, data } = this.props;

    renderComponent(Header, { history }, this.container);

    const title = document.createElement('h1');
    title.innerText = 'Product Detail';
    this.container.appendChild(title);

    const info1 = document.createElement('h2');
    info1.innerText = match.params.id;
    this.container.appendChild(info1);

    const info2 = document.createElement('h2');
    info2.innerText = data;
    this.container.appendChild(info2);

    const info3 = document.createElement('h2');
    info3.innerText = location.search;
    this.container.appendChild(info3);

    renderComponent(Footer, null, this.container);

    return this.container;
  }
}

export default ProductDetailPage;
