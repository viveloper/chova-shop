import { Component, renderComponent } from './MyReact.js';

class DefaultNotFoundComponent extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }
  render() {
    this.container.innerHTML = '';

    const message = document.createElement('h3');
    message.innerText = 'Not Found';
    this.container.appendChild(message);

    return this.container;
  }
}

class BrowserRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: location.pathname,
    };

    this.push = this.push.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    this.container = document.createElement('div');

    window.addEventListener('popstate', this.handlePopState);
  }

  push(path) {
    if (path === this.state.currentPath) return;
    history.pushState({ path }, '', path);
    this.setState({
      currentPath: path,
    });
  }

  goBack() {
    history.back();
  }

  handlePopState(e) {
    const path = e.state ? e.state.path : location.pathname;
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
    this.container.innerHTML = '';

    const { routes } = this.props;
    const { pathKey, params } = this.parseCurrentPath();

    const targetRoute = routes.find((route) => route.path === pathKey);
    const notFoundRoute = routes.find((route) => route.path === '*');
    const route = targetRoute
      ? targetRoute
      : notFoundRoute
      ? notFoundRoute
      : { Component: DefaultNotFoundComponent };

    const { Component, props } = route;

    renderComponent(
      Component,
      {
        history: { push: this.push, goBack: this.goBack },
        match: { params },
        location: { search: location.search },
        ...props,
      },
      this.container
    );

    return this.container;
  }
}

export default BrowserRouter;
