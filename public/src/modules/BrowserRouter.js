import Component from '../components/Component';

class BrowserRouter {
  constructor($target) {
    this.$target = $target;
    this.routingTable = {
      ['/']: {
        exact: true,
        Component: Component,
        props: { history, match, location, ...props },
      },
      ['/products']: {
        exact: true,
        Component: Component,
        props: { history, match, location, ...props },
      },
      ['/products/:id']: {
        exact: true,
        Component: Component,
        props: { history, match, location, ...props },
      },
    };
  }

  addRoute({ path, Component, props }) {
    this.routingTable[path] = {
      Component,
      props,
    };
  }

  parsePath(pathname) {
    const queryStartIdx = pathname.indexOf('?');
    if (queryStartIdx < 0) {
      return {
        path: pathname,
        query: {},
      };
    }
    const path = pathname.slice(0, queryStartIdx);
    const queryStr = pathname.slice(queryStartIdx + 1);
    const queryArr = queryStr.split('&');
    const query = {};
    queryArr.forEach((item) => {
      const [key, value] = item.split('=');
      query[key] = value;
    });
    return { path, query };
  }

  getParams(path) {
    let pathTokens = path.split('/');
    pathTokens = pathTokens.filter((token) => !token);
    Object.keys(this.routingTable).forEach((pathKey) => {
      let pathKeyTokens = pathKey.split('/');
      pathKeyTokens = pathKeyTokens.filter((token) => !token);

      let isMatch = false;
      if (pathTokens.length === pathKeyTokens.length) {
        pathTokens.forEach((pathToken, idx) => {
          if (pathToken === pathKeyTokens[idx]) {
            if (!pathKeyTokens[idx].includes(':')) {
            }
          }
        });
      }
    });
  }

  route() {
    const { path, query } = parsePath(location.pathname);

    const { routingTableKey, params } = getParams(path);

    const history = {};
    const match = {};
    const location = {};
    this.props = {
      history,
      match,
      location,
      ...this.props,
    };

    new this.Component(this.$target, this.props);
  }
}

export default BrowserRouter;
