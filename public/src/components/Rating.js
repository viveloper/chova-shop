import { Component, renderComponent } from '../modules/MyReact.js';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'rating';
  }

  render() {
    this.container.innerHTML = '';

    const { value, text, color = '#f8e825' } = this.props;

    const star1 = document.createElement('span');
    this.container.appendChild(star1);

    const starIcon1 = document.createElement('i');
    starIcon1.className =
      value >= 1
        ? 'fas fa-star'
        : value >= 0.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star';
    starIcon1.style.color = color;
    star1.appendChild(starIcon1);

    const star2 = document.createElement('span');
    this.container.appendChild(star2);

    const starIcon2 = document.createElement('i');
    starIcon2.className =
      value >= 2
        ? 'fas fa-star'
        : value >= 1.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star';
    starIcon2.style.color = color;
    star2.appendChild(starIcon2);

    const star3 = document.createElement('span');
    this.container.appendChild(star3);

    const starIcon3 = document.createElement('i');
    starIcon3.className =
      value >= 3
        ? 'fas fa-star'
        : value >= 2.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star';
    starIcon3.style.color = color;
    star3.appendChild(starIcon3);

    const star4 = document.createElement('span');
    this.container.appendChild(star4);

    const starIcon4 = document.createElement('i');
    starIcon4.className =
      value >= 4
        ? 'fas fa-star'
        : value >= 3.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star';
    starIcon4.style.color = color;
    star4.appendChild(starIcon4);

    const star5 = document.createElement('span');
    this.container.appendChild(star5);

    const starIcon5 = document.createElement('i');
    starIcon5.className =
      value >= 5
        ? 'fas fa-star'
        : value >= 4.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star';
    starIcon5.style.color = color;
    star5.appendChild(starIcon5);

    const textEl = document.createElement('span');
    textEl.innerText = text ? text : '';
    this.container.appendChild(textEl);

    return this.container;
  }
}

export default Rating;
