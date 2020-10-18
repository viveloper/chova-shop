import { Component, renderComponent } from '../../modules/MyReact.js';
import OrderProgressNavBar from '../OrderProgressNavBar.js';
import PaymentForm from './PaymentForm.js';

class Payment extends Component {
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

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);    

    renderComponent(OrderProgressNavBar, {history, step}, col);

    const title = document.createElement('h1');
    title.innerText = 'Payment Method';
    col.appendChild(title);

    renderComponent(
      PaymentForm, 
      {
        onSubmit,
      },         
      col
    );    

    return this.container;
  }
}

export default Payment;
