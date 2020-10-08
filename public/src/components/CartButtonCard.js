import { Component, renderComponent } from '../modules/MyReact.js';

class CartButtonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1,
    };

    this.container = document.createElement('div');
    this.container.className = 'card';
  }

  handleQtySelect = (e) => {
    const selectedQty = Number(e.target.value);
    this.setState({
      qty: selectedQty,
    });
  };

  handleAddToCart = () => {
    const { product, addCartItem, history } = this.props;
    const { qty } = this.state;
    addCartItem(product, qty);
  };

  render() {
    this.container.innerHTML = '';

    const { product } = this.props;
    const { qty } = this.state;

    const listGroup = document.createElement('div');
    listGroup.className = 'list-group list-group-flush';
    this.container.appendChild(listGroup);

    const listGroupItem1 = document.createElement('div');
    listGroupItem1.className = 'list-group-item';
    listGroup.appendChild(listGroupItem1);

    const priceRow = document.createElement('div');
    priceRow.className = 'row';
    listGroupItem1.appendChild(priceRow);

    const priceCol1 = document.createElement('div');
    priceCol1.className = 'col';
    priceCol1.innerText = 'Price:';
    priceRow.appendChild(priceCol1);

    const priceCol2 = document.createElement('div');
    priceCol2.className = 'col';
    priceCol2.innerHTML = `<strong>$${product.price}</strong>`;
    priceRow.appendChild(priceCol2);

    const listGroupItem2 = document.createElement('div');
    listGroupItem2.className = 'list-group-item';
    listGroup.appendChild(listGroupItem2);

    listGroupItem2.innerHTML = `
      <div class="row">
        <div class="col">Status:</div>
        <div class="col">${
          product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'
        }</div>
      </div>
    `;

    if (product.countInStock > 0) {
      const listGroupItem3 = document.createElement('div');
      listGroupItem3.className = 'list-group-item';
      listGroup.appendChild(listGroupItem3);

      const qtyRow = document.createElement('div');
      qtyRow.className = 'row';
      listGroupItem3.appendChild(qtyRow);

      const qtyCol1 = document.createElement('div');
      qtyCol1.className = 'col';
      qtyCol1.innerText = 'Qty';
      qtyRow.appendChild(qtyCol1);

      const qtyCol2 = document.createElement('div');
      qtyCol2.className = 'col';
      qtyRow.appendChild(qtyCol2);

      const qtySelect = document.createElement('select');
      qtySelect.className = 'form-control';
      qtySelect.addEventListener('input', this.handleQtySelect);
      qtyCol2.appendChild(qtySelect);

      Array(product.countInStock)
        .fill('')
        .forEach((_, idx) => {
          const option = document.createElement('option');
          option.value = idx + 1;
          option.innerText = idx + 1;
          option.selected = idx + 1 === qty ? true : false;
          qtySelect.appendChild(option);
        });
    }

    const listGroupItem4 = document.createElement('div');
    listGroupItem4.className = 'list-group-item';
    listGroup.appendChild(listGroupItem4);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'btn-block btn btn-primary';
    addToCartBtn.type = 'button';
    addToCartBtn.disabled = product.countInStock === 0;
    addToCartBtn.innerText = 'Add To Cart';
    addToCartBtn.addEventListener('click', this.handleAddToCart);
    listGroupItem4.appendChild(addToCartBtn);

    return this.container;
  }
}

export default CartButtonCard;
