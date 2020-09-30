import Component from './Component.js';

class ProductsPage extends Component {
  constructor($target, props) {
    super(props);
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <h1>Products Page</h1>
    `;
  }
}

export default ProductsPage;
