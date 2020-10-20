import { Component, renderComponent } from '../../modules/MyReact.js';
import Loader from '../Loader.js';
import ProductForm from '../ProductForm.js';

class AdminProduct extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('main');
    this.container.className = 'py-3';
  }

  render() {
    this.container.innerHTML = '';

    const {     
      type, 
      history,
      product: {
        loading,
        data,
        error,
      },
      uploadState,
      inputs,
      inputsError,
      onSubmit,
      onImageSelect,
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
    title.innerText = type === 'edit' ? 'Edit Product' : 'Create Product';
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

    renderComponent(
      ProductForm, 
      { 
        history, 
        inputs, 
        error: inputsError, 
        uploadState, 
        btnText: type === 'edit' ? 'Update' : 'Create',
        onSubmit, 
        onImageSelect 
      }, 
      col
    );

    return this.container;
  }
}

export default AdminProduct;
