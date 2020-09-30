class Component {
  constructor({ $target, tagName, className }, props = {}) {
    this.el = document.createElement(tagName);
    this.el.className = className;
    $target.appendChild(this.el);

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

export default Component;
