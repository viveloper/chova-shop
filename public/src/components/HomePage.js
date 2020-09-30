import Component from './Component.js';

class HomePage extends Component {
  constructor($target, props) {
    super(props);
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <h1>Home Page</h1>
    `;
  }
}

export default HomePage;
