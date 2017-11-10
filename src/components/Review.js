import React from 'react';
import ReactStars from 'react-stars';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChanged = this.handleRatingChanged.bind(this);
  }

  handleRatingChanged() {
    console.log('handleRatingChanged');
  }

  render() {
    return (
      <div>
        <p>This is from the Review page.</p>
        <ReactStars count={5} onChange={this.handleRatingChanged} size={24} color2={'#ffd700'} />
      </div>
    );
  }
}

export default Review;
