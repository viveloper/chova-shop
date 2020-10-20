import { Component } from '../../modules/MyReact.js';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
    this.container.addEventListener('input', this.handleInput);
    this.container.addEventListener('click', this.handleClick);
  }

  handleInput = (e) => {
    if (e.target.dataset.oninput === 'edit-qty') {
      const productId = e.target.dataset.itemId;
      const qty = Number(e.target.value);
      this.props.onCartItemQtySelect(productId, qty);
    }
  };

  handleClick = (e) => {
    if(e.target.dataset.onclick === 'link-product') {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      this.props.history.push(path);
      return;
    }
    if(e.target.dataset.onclick === 'delete-item') {
      const productId = e.target.dataset.itemId;
      this.props.onCartItemDeleteBtnClick(productId);
      return;
    }
  };


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
                <a href="/products/${_id}" data-onclick="link-product">${name}</a>
              </div>
              <div class="col-md-2">$${price}</div>
              <div class="col-md-2">
                <select class="form-control" data-oninput="edit-qty" data-item-id="${_id}">
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
                <button type="button" class="btn btn-light" data-onclick="delete-item" data-item-id="${_id}">
                  <i class="fas fa-trash" data-onclick="delete-item" data-item-id="${_id}"></i>
                </button>
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
