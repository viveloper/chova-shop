import { Component, renderComponent } from '../modules/MyReact.js';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.container = document.createElement('div');
    this.container.className = 'counter-container';
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    this.container.innerHTML = '';

    const number = document.createElement('div');
    number.className = 'count';
    number.innerText = this.state.count;

    const increaseBtn = document.createElement('button');
    increaseBtn.innerText = '+';
    increaseBtn.addEventListener('click', this.increase);

    const decreaseBtn = document.createElement('button');
    decreaseBtn.innerText = '-';
    decreaseBtn.addEventListener('click', this.decrease);

    this.container.appendChild(number);
    this.container.appendChild(increaseBtn);
    this.container.appendChild(decreaseBtn);

    return this.container;
  }
}

export default Counter;
