import React from 'react';
import ReactStars from 'react-stars';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChanged = this.handleRatingChanged.bind(this);
  }

  handleRatingChanged(newRating) {
    console.log('New rating: ', newRating);
  }

  render() {
    return (
      <div>
        <div className="wrapper wrapper-review">
          <p>This is from the Review page.</p>
          <ReactStars
            count={5}
            onChange={this.handleRatingChanged}
            size={20}
            color2={'#ffd700'}
            className={'stars-wrapper'}
          />
        </div>
      </div>
    );
  }
}

export default Review;
