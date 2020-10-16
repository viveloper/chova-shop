import {Component } from '../../modules/MyReact.js';

class ProductReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        rating: props.inputs.rating,
        comment: props.inputs.comment,
      },
      error: '',
    }
    this.container = document.createElement('div');
    this.container.className = 'list-group-item'
    this.container.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const strRating = e.target.querySelector('select').value;
    const rating = strRating ? Number(strRating) : 0;
    const comment = e.target.querySelector('textarea').value;        

    if (!rating) {
      this.setState({
        inputs: { rating, comment },
        error: 'Rating is requried',
      });
      return;
    }
    if (!comment) {      
      this.setState({
        inputs: { rating, comment },
        error: 'Comment is requried',
      });
      return;
    }

    this.props.onSubmit({ rating, comment });
  }

  render() {    
    const { inputs: { rating, comment }, error } = this.state;

    this.container.innerHTML = `
      <h2>Write a Customer Review</h2>
      <form class="">
        <div class="form-group">
          <label class="form-label" for="rating">Rating</label>
          <select id="rating" class="form-control">
            <option value="">Select...</option>
            <option value="1" ${rating === 1 ? 'selected' : ''}>1 - Poor</option>
            <option value="2" ${rating === 2 ? 'selected' : ''}>2 - Fair</option>
            <option value="3" ${rating === 3 ? 'selected' : ''}>3 - Good</option>
            <option value="4" ${rating === 4 ? 'selected' : ''}>4 - Very Good</option>
            <option value="5" ${rating === 5 ? 'selected' : ''}>5 - Excellent</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="comment">Comment</label>
          <textarea row="3" id="comment" class="form-control">${comment}</textarea>
        </div>
        <div class="text-danger my-3 px-2" style="display:${
          error ? 'block' : 'none'
        }">
          ${error ? error : ''}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `;

    return this.container;
  }
}

export default ProductReviewForm;