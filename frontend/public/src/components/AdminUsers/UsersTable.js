import {Component, renderComponent} from '../../modules/MyReact.js';

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.container.className = 'table-responsive';
    this.container.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if(e.target.dataset.name === 'mailto') return;

    e.preventDefault();
    if(e.target.dataset.name === 'move-user-edit') {
      const path = e.target.dataset.href;
      this.props.history.push(path);
      return;
    }
    if(e.target.dataset.name === 'delete-user') {
      const userId = e.target.dataset.id;
      if(!window.confirm('are you sure?')) return;
      this.props.onUserDelete(userId);
      return;
    }
  }

  render() {
    this.container.innerHTML = '';

    const { data } = this.props;

    this.container.innerHTML = `
      <table class="table-sm table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        ${
          data.map((user) => `
            <tr>
              <td>${user._id}</td>
              <td>${user.name}</td>
              <td><a href="mailto:${user.email}" data-name="mailto">${user.email}</a></td>
              <td>
              ${user.isAdmin ? `
                <i class="fas fa-check" style="color: green;"></i>
                ` : `
                <i class="fas fa-times" style="color: red;"></i>
                `
              }
              </td>
              <td>
                <a href="/admin/user/${user._id}/edit" class="btn-sm btn btn-light" data-name="move-user-edit" data-href="/admin/user/${user._id}/edit">
                  <i class="fas fa-edit" data-name="move-user-edit" data-href="/admin/user/${user._id}/edit"></i>
                </a>
                <button type="button" class="btn-sm btn btn-danger" id="btn-delete-user" data-name="delete-user" data-id="${user._id}">
                  <i class="fas fa-trash" data-name="delete-user" data-id="${user._id}"></i>
                </button>
              </td>
            </tr>
          `).join('')
        }
        </tbody>
      </table>
    `;

    return this.container;
  }
}

export default UsersTable;