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

export const renderComponent = (Component, props, container, type = 'DOM') => {
  const component = new Component(props);
  if (type === 'DOM') {
    container.appendChild(component.render());
  } else if (type === 'HTML') {
    const wrapper = document.createElement('div');
    wrapper.appendChild(component.render());
    return wrapper.innerHTML;
  }
};
