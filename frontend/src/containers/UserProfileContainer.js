import { Component, renderComponent } from '../modules/MyReact.js';
import UserProfileForm from '../components/Profile/UserProfileForm.js';
import { asyncHandler, asyncInitState } from '../modules/asyncHandler.js';
import * as usersApi from '../api/users.js';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        name: props.user.name,
        email: props.user.email,
        password: '',
        confirmPassword: '',
      },
      loading: false,
      error: null,    
    }

    this.container = document.createElement('div');
  }

  updateUserProfile = async ({ name, email, password, confirmPassword }) => {
    const { token } = this.props.user;
    const inputs = { name, email, password, confirmPassword };    

    this.setState({
      loading: true,
      error: null,
    });

    const { isError, data } = await usersApi.updateUserProfile(token, { name, email, password });

    if (!isError) {            
      this.props.setUser(data);      
    } else {
      this.setState({      
        inputs,
        loading: false,
        error: data,
      });
    }
  }

  render() {
    this.container.innerHTML = '';

    const { inputs, loading, error } = this.state

    renderComponent(
      UserProfileForm, 
      { 
        inputs,
        loading,
        error,
        onSubmit: this.updateUserProfile,
      }, 
      this.container
    );

    return this.container;
  }
}

export default UserProfileContainer;
