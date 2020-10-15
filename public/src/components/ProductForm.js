import { Component } from '../modules/MyReact.js';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
    this.container.addEventListener('input', this.handleInput);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const product = this.getInputs();
    this.props.onSubmit(product);
  }

  handleInput = (e) => {
    e.preventDefault();
    if(e.target.id === 'image-file') {
      const product = this.getInputs();
      const file = e.target.files[0];
      this.props.onImageSelect(file, product);
      return;
    }
  }

  getInputs = () => {
    const name = this.container.querySelector('input[id=name]').value;
    const price = this.container.querySelector('input[id=price]').value;
    const image = this.container.querySelector('input[id=image]').value;
    const brand = this.container.querySelector('input[id=brand]').value;
    const countInStock = this.container.querySelector('input[id=countInStock]').value;
    const category = this.container.querySelector('input[id=category]').value;
    const description = this.container.querySelector('input[id=description]').value;

    return { name, price, image, brand, countInStock, category, description };
  }

  render() {
    const { data } = this.props;

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${data.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="price">Price</label>
        <input placeholder="Enter price" type="number" id="price" class="form-control" value="${data.price}">
      </div>
      <div class="form-group">
        <label class="form-label" for="image">Image</label>
        <input placeholder="Enter image url" type="text" id="image" class="form-control" value="${data.image}">
        <div class="custom custom-file">
          <input id="image-file" type="file" class="custom-file-input">
          <label for="image-file" class="custom-file-label">Choose File</label>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="brand">Brand</label>
        <input placeholder="Enter brand" type="text" id="brand" class="form-control" value="${data.brand}">
      </div>
      <div class="form-group">
        <label class="form-label" for="countInStock">Count In Stock</label>
        <input placeholder="Enter countInStock" type="number" id="countInStock" class="form-control" value="${data.countInStock}">
      </div>
      <div class="form-group">
        <label class="form-label" for="category">Category</label>
        <input placeholder="Enter category" type="text" id="category" class="form-control" value="${data.category}">
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <input placeholder="Enter description" type="text" id="description" class="form-control" value="${data.description}">
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default ProductForm;