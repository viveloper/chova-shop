import { Component } from '../../modules/MyReact.js';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'list-group list-group-flush';
  }

  render() {    
    const { 
      order: {
        user,
        shippingAddress,
        orderItems,
        paymentMethod,
        isPaid,
        paymentResult,
        isDelivered,
      } 
    } = this.props;    

    console.log(this.props.order);

    this.container.innerHTML = `
      <div class="list-group-item">
        <h2>Shipping</h2>
        <p><strong>Name: </strong> ${user.name}</p>
        <p><strong>Email: </strong> <a href="mailto:${user.email}">${user.email}</a></p>
        <p><strong>Address:</strong>${shippingAddress.address}, ${shippingAddress.city} ${shippingAddress.postalCode}, ${shippingAddress.country}</p>
        ${
          isDelivered ? `
          <div role="alert" class="fade alert alert-success show">Delivered</div>
          ` : `
          <div role="alert" class="fade alert alert-danger show">Not Delivered</div>
          `
        }        
      </div>
      <div class="list-group-item">
        <h2>Payment Method</h2>
        <p><strong>Method: </strong>${paymentMethod}</p>
        ${
          isPaid ? `
          <div role="alert" class="fade alert alert-success show">Paid on ${new Date(paymentResult.update_time).toLocaleString()}</div>
          ` : `
          <div role="alert" class="fade alert alert-danger show">Not Paid</div>
          `
        }           
      </div>
      <div class="list-group-item">
        <h2>Order Items</h2>
        <div class="list-group list-group-flush">
        ${
          orderItems.map((item) => `
            <div class="list-group-item">
              <div class="row">
                <div class="col-md-1">
                  <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col">
                  <a href="/products/${item._id}">${item.name}</a>
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
