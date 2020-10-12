import { Component, renderComponent } from '../../modules/MyReact.js';
import OrderProgressNavBar from '../OrderProgressNavBar.js';
import ShippingForm from './ShippingForm.js';

class Shipping extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';    

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);    

    renderComponent(OrderProgressNavBar, null, col);

    const title = document.createElement('h1');
    title.innerText = 'Shipping';
    col.appendChild(title);

    renderComponent(ShippingForm, null, col);    

    return this.container;
  }
}

export default Shipping;
