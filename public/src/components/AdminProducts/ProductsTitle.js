import { Component } from '../../modules/MyReact.js';

class ProductsTitle extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'align-items-center row';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if(e.target.dataset.name === 'create-product') {
      this.props.history.push('/admin/product/create');
      return;
    }
  }

  render() {
    this.container.innerHTML = `
      <div class="col">
        <h1>Products</h1>
      </div>
      <div class="text-right col">
        <button type="button" class="my-3 btn btn-primary" data-name="create-product">
          <i class="fas fa-plus" data-name="create-product"></i> Create Product
        </button>
      </div>
    `;

    return this.container;
  }
}

export default ProductsTitle;