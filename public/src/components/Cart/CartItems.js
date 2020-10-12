import { Component } from '../../modules/MyReact.js';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {
    const { items } = this.props;

    if(items.length === 0) {
      this.container.innerHTML = `
        <div role="alert" class="fade alert alert-info show">Your cart is empty</div>
      `;
      return this.container;
    }

    this.container.innerHTML = items
      .map(
        ({ _id, name, image, price, qty, countInStock }) => `
          <div class="list-group-item">
            <div class="row">
              <div class="col-md-2">
                <img src="${image}" alt="${name}" class="img-fluid rounded">
              </div>
              <div class="col-md-3">
                <a href="/products/${_id}">${name}</a>
              </div>
              <div class="col-md-2">$${price}</div>
              <div class="col-md-2">
                <select class="form-control select-cart-item-qty" data-item-id="${_id}">
                ${Array(countInStock)
                  .fill('')
                  .map(
                    (_, idx) => `
                  <option value="${idx + 1}" ${
                      idx + 1 === qty ? 'selected' : ''
                    }>${idx + 1}</option>
                  `
                  )
                  .join('')}
                </select>
              </div>
              <div class="col-md-2">
                <button type="button" class="btn btn-light btn-cart-item-remove" data-item-id="${_id}"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        `
      )
      .join('');

    return this.container;
  }
}

export default CartItems;
