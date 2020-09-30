import Component from './Component.js';
import Header from './Header.js';

class ProductsPage extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'main',
        className: 'products-page',
      },
      props
    );

    this.render();
  }

  render() {
    this.el.innerHTML = ``;

    new Header(this.el, { history: this.props.history });

    const title = document.createElement('h1');
    title.innerText = 'Products Page';

    this.el.appendChild(title);
  }
}

export default ProductsPage;
