export class Component {
  constructor(props) {
    this.props = props;
  }
  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.render();
  }
}

export const renderComponent = (Component, props, container) => {
  const component = new Component(props);
  container.appendChild(component.render());
};
