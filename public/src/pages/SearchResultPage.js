import { Component, renderComponent } from '../modules/MyReact.js';
import SearchResultContainer from '../containers/SearchResultContainer.js';

class SearchResultPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  render() {
    this.container.innerHTML = '';

    const { history, match } = this.props;
    const { keyword, pageNumber } = match.params;
    
    renderComponent(
      SearchResultContainer,
      {
        history,
        keyword,
        pageNumber
      },
      this.container
    );    

    return this.container;
  }
}

export default SearchResultPage;
