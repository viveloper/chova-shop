import { Component, renderComponent } from '../modules/MyReact.js';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('footer');
  }

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    const content = document.createElement('div');
    content.className = 'text-center py-3 col';
    content.innerHTML = 'Copyright &copy; ChovaShop';
    container.appendChild(content);

    return this.container;
  }
}

export default Footer;
