import Component from './Component.js';
import Header from './Header.js';

class ProductDetailPage extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'main',
        className: 'product-detail-page',
      },
      props
    );

    this.render();
  }

  render() {
    this.el.innerHTML = ``;

    const productId = this.props.match.params.id;

    new Header(this.el, { history: this.props.history });

    const title = document.createElement('h1');
    title.innerText = 'Product Detail Page';

    const description = document.createElement('h2');
    description.innerText = `Product ID : ${productId}`;

    this.el.appendChild(title);
    this.el.appendChild(description);
  }
}

export default ProductDetailPage;
