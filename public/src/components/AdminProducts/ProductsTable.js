import { Component } from '../../modules/MyReact.js';

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    e.preventDefault();
    if(e.target.dataset.name === 'move-product-edit') {
      const path = e.target.dataset.href;
      this.props.history.push(path);
      return;
    }
    if(e.target.dataset.name === 'delete-product') {
      const productId = e.target.dataset.id;
      if(!window.confirm('are you sure?')) return;
      this.props.onDelete(productId);
      return;
    }
  }

  render() {
    this.container.innerHTML = '';

    const { products } = this.props;

    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${
          products.map((product) => `
            <tr>
              <td>${product._id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
                <a href="/admin/product/${product._id}/edit" class="btn-sm btn btn-light" data-name="move-product-edit" data-href="/admin/product/${product._id}/edit">
                  <i class="fas fa-edit" data-name="move-product-edit" data-href="/admin/product/${product._id}/edit"></i>
                </a>
                <button type="button" class="btn-sm btn btn-danger" data-name="delete-product" data-id="${product._id}">
                  <i class="fas fa-trash" data-name="delete-product" data-id="${product._id}"></i>
                </button>
              </td>
            </tr>
          `).join('')
        }
        </tbody>
      </table>
    `;

    return this.container;
  }
}

export default ProductsTable;