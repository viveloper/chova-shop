import { Component, renderComponent } from './MyReact.js';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.container = document.createElement('div');
  }
}
