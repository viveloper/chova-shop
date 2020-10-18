import { Component, renderComponent } from '../../modules/MyReact.js';
import LoginForm from './LoginForm.js';
import Loader from '../Loader.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if (e.target.dataset.onclick === 'move-register') {
      e.preventDefault();
      this.props.history.push(e.target.getAttribute('href'));
    }
  };

  render() {
    this.container.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const {
      inputs,      
      onSubmit,
      loading,
      error,      
    } = this.props;

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        container
      );
      return this.container;
    }

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);

    const title = document.createElement('h1');
    title.innerText = 'Sign In';
    col.appendChild(title);

    renderComponent(
      LoginForm,
      {
        inputs, 
        error,
        onSubmit,
      },
      col
    );

    const linkRow = document.createElement('div');
    linkRow.className = 'py-3 row';
    col.appendChild(linkRow);

    const linkCol = document.createElement('div');
    linkCol.className = 'col';
    linkRow.appendChild(linkCol);

    linkCol.innerHTML = 'New Customer? <a href="/register" data-onclick="move-register">Register</a>';    

    return this.container;
  }
}

export default Login;
