import { Component, renderComponent } from '../modules/MyReact.js';

class CartButtonCard extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'card';
  }

  render() {
    this.container.innerHTML = '';

    const { product } = this.props;

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

    const listGroupItem3 = document.createElement('div');
    listGroupItem3.className = 'list-group-item';
    listGroup.appendChild(listGroupItem3);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'btn-block btn btn-primary';
    addToCartBtn.type = 'button';
    addToCartBtn.disabled = product.countInStock === 0;
    addToCartBtn.innerText = 'Add To Cart';
    listGroupItem3.appendChild(addToCartBtn);

    return this.container;
  }
}

export default CartButtonCard;
