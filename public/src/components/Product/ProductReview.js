import { Component, renderComponent } from '../../modules/MyReact.js';
import Rating from '../Rating.js';

class ProductReviews extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'list-group-item';
  }

  render() {
    this.container.innerHTML = '';

    const { review } = this.props;

    const userName = document.createElement('strong');
    userName.innerText = review.name;
    this.container.appendChild(userName);

    renderComponent(
      Rating,
      { value: review.rating, text: ``},
      this.container
    );

    const updatedDate = document.createElement('p');
    updatedDate.innerText = new Date(review.updatedAt).toLocaleDateString();
    this.container.appendChild(updatedDate);

    const comment = document.createElement('p');
    comment.innerText = review.comment;
    this.container.appendChild(comment);

    return this.container;
  }
}

export default ProductReviews;
