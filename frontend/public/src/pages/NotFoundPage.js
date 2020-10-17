import { Component, renderComponent } from '../modules/MyReact.js';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    this.container.innerHTML = '';    

    const goBackBtn = document.createElement('a');
    goBackBtn.className = 'btn btn-light my-3';
    goBackBtn.setAttribute('href', '/');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', this.goBack);
    this.container.appendChild(goBackBtn);

    const message = document.createElement('h1');
    message.className = 'text-center';
    message.innerText = 'Page Not Found';
    this.container.appendChild(message);    

    return this.container;
  }
}

export default NotFoundPage;
