import { Component, renderComponent } from '../modules/MyReact.js';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = '';    

    const goBackBtn = document.createElement('a');
    goBackBtn.className = 'btn btn-light my-3';
    goBackBtn.setAttribute('href', '/');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', (e) => this.handleLinkClick(e, `/`));
    this.container.appendChild(goBackBtn);

    const message = document.createElement('h1');
    message.className = 'text-center';
    message.innerText = 'Page Not Found';
    this.container.appendChild(message);    

    return this.container;
  }
}

export default NotFoundPage;
