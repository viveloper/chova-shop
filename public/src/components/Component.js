class Component {
  constructor(props) {
    this.props = props;
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
