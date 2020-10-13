import {Component, renderComponent} from '../../modules/MyReact.js';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {     
    const {
      cart: {
        items,
        shippingAddress: {
          address,
          city,
          postalCode,
          country
        },
        paymentMethod,
      }
    } = this.props;

    this.container.innerHTML = `
      <div class="list-group-item">
        <h2>Shipping</h2>
        <p><strong>Address:</strong>${address}, ${city} ${postalCode}, ${country}</p>
      </div>
      <div class="list-group-item">
        <h2>Payment Method</h2>
        <strong>Method: </strong>${paymentMethod}
      </div>
      <div class="list-group-item">
        <h2>Order Items</h2>
        <div class="list-group list-group-flush">
            ${
              items.map((item) => `
                <div class="list-group-item">
                  <div class="row">
                    <div class="col-md-1">
                      <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                    </div>
                    <div class="col">
                      <a href="/product/${item._id}">${item.name}</a>
                    </div>
                    <div class="col-md-4">${item.qty} x $${item.price} = $${item.qty * item.price}</div>
                  </div>
                </div>
              `).join('')
            }
        </div>
      </div>
    `;

    return this.container;
  }
}

export default OrderDetail;