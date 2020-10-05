import { Component, renderComponent } from '../modules/MyReact.js';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('footer');
    this.container.className = 'footer';
  }

  render() {
    this.container.innerHTML = '';

    const content = document.createElement('p');
    content.innerText = 'Footer';

    this.container.appendChild(content);

    return this.container;
  }
}

export default Footer;
