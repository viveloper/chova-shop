import { Component, renderComponent } from '../modules/MyReact.js';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'spinner-border';
  }

  render() {
    this.container.innerHTML = '';

    const { width, height, margin, display } = this.props;

    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.margin = margin;
    this.container.style.display = display;

    const spanEl = document.createElement('span');
    spanEl.className = 'sr-only';
    spanEl.innerText = 'Loading...';
    this.container.appendChild(spanEl);

    return this.container;
  }
}

export default Loader;
