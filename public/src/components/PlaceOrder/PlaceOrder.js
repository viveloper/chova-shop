import { Component, renderComponent } from '../../modules/MyReact.js';
import OrderProgressNavBar from '../OrderProgressNavBar.js';
import OrderDetail from './OrderDetail.js';
import OrderSummary from './OrderSummary.js';

class PlaceOrder extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';    

    const {history, step, onSubmit} = this.props;

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    renderComponent(OrderProgressNavBar, {history, step}, container);

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    const col1 = document.createElement('div');
    col1.className = 'col-md-8';
    row.appendChild(col1);    

    renderComponent(OrderDetail, null, col1);

    const col2 = document.createElement('div');
    col2.className = 'col-md-4';
    row.appendChild(col2);

    renderComponent(OrderSummary, null, col2);

    return this.container;
  }
}

export default PlaceOrder;
