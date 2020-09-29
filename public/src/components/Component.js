class Component {
  constructor() {
    this.componentDidMount();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.render();
    this.componentDidUpdate();
  }
}

export default Component;
