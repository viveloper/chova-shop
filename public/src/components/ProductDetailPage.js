import Component from './Component.js';

class ProductDetailPage extends Component {
  constructor($target, props) {
    super(props);
    this.$target = $target;
    this.render();
  }
  render() {
    const productId = this.props?.match?.params?.id;
    this.$target.innerHTML = `
      <h1>Product Detail Page</h1>
      <h2>Product ID : ${productId}</h2>
    `;
  }
}

export default ProductDetailPage;
