import Component from './Component.js';

class BrowserRouter extends Component {
  constructor($target, props) {
    super(
      {
        $target,
        tagName: 'div',
        className: 'browser-router',
      },
      props
    );

    this.state = {
      currentPath: location.pathname,
    };

    this.push = this.push.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    window.addEventListener('popstate', this.handlePopState);

    this.render();
  }

  push(path) {
    history.pushState({ path }, '', path);
    this.setState({
      currentPath: path,
    });
  }

  handlePopState(e) {
    const { path } = e.state;
    this.setState({
      currentPath: path,
    });
  }

  parseCurrentPath() {
    const { currentPath } = this.state;
    const { routes } = this.props;

    let pathKey;
    let params = {};
    let currentPathTokens = currentPath.split('/');
    currentPathTokens = currentPathTokens.filter((token) => !!token);

    const pathKeys = routes.map((route) => route.path);
    for (let i = 0; i < pathKeys.length; i++) {
      const key = pathKeys[i];
      let pathTokens = key.split('/');
      pathTokens = pathTokens.filter((token) => !!token);

      let isMatch = true;
      const tempParams = {};
      if (currentPathTokens.length === pathTokens.length) {
        currentPathTokens.forEach((currentPathToken, idx) => {
          if (pathTokens[idx].includes(':')) {
            tempParams[pathTokens[idx].replace(':', '')] = currentPathToken;
          } else if (currentPathToken !== pathTokens[idx]) {
            isMatch = false;
          }
        });
      } else {
        isMatch = false;
      }

      if (isMatch) {
        pathKey = key;
        params = { ...tempParams };
        break;
      }
    }

    return {
      pathKey,
      params,
    };
  }

  render() {
    this.el.innerHTML = ``;

    const { routes } = this.props;
    const { pathKey, params } = this.parseCurrentPath();

    const route = routes.find((route) => route.path === pathKey);

    if (!route) {
      return;
    }

    const { Component, props } = route;

    new Component(this.el, {
      history: { push: this.push },
      match: { params },
      location: { search: location.search },
      ...props,
    });
  }
}

export default BrowserRouter;
