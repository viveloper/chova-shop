import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import UserForm from './UserForm.js';

class AdminEditUser extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const {
      history,
      inputs,
      loading,
      formError,
      error,
      onSubmit,
    } = this.props;

    const container = document.createElement('div');
    container.className = 'container';
    this.container.appendChild(container);

    const btnGoBack = document.createElement('span');
    btnGoBack.className = 'btn btn-light my-3';
    btnGoBack.innerText = 'Go Back';
    btnGoBack.addEventListener('click', () => history.goBack());
    container.appendChild(btnGoBack);

    const row = document.createElement('div');
    row.className = 'justify-content-md-center row';
    container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-md-6 col-12';
    row.appendChild(col);

    const title = document.createElement('h1');
    title.innerText = 'Edit User';
    col.appendChild(title);

    if (loading) {
      renderComponent(
        Loader,
        {
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        },
        col
      );
      return this.container;
    }
    if (error) {
      const errorEl = document.createElement('h1');
      errorEl.innerText = error.message;
      col.appendChild(errorEl);

      return this.container;
    }

    renderComponent(UserForm, { inputs, error: formError, onSubmit }, col);

    return this.container;
  }
}

export default AdminEditUser;
