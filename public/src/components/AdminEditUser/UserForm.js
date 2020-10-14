import {Component, renderComponent} from '../../modules/MyReact.js';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('form');
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[id=name]').value;
    const email = e.target.querySelector('input[id=email]').value;
    const isAdmin = e.target.querySelector('input[id=isadmin]').checked;

    this.props.onSubmit({ name, email, isAdmin });
  }

  render() {
    const { data } = this.props;

    this.container.innerHTML = `
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input placeholder="Enter name" type="name" id="name" class="form-control" value="${data.name}">
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input placeholder="Enter email" type="email" id="email" class="form-control" value="${data.email}">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" id="isadmin" class="form-check-input"${data.isAdmin ? ' checked' : ''}>
          <label title="" for="isadmin" class="form-check-label">Is Admin</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    `;

    return this.container;
  }
}

export default UserForm;