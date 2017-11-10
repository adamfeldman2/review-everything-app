import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChanged = this.handleRatingChanged.bind(this);
  }

  handleRatingChanged(newRating) {}

  render() {
    const { title, date, stars, note } = this.props.reviewData;
    return (
      <div>
        <div className="wrapper wrapper-review">
          <h3>{title}</h3>
          <div>{moment(date).format('MMM D, YYYY')}</div>
          <ReactStars
            count={5}
            value={stars}
            onChange={this.handleRatingChanged}
            edit={false}
            size={20}
            color2={'#ffd700'}
            className={'stars-wrapper'}
          />
          <div>Note: {note}</div>
          <button>Edit</button>
          <div>----------------------------------------------------------------------</div>
        </div>
      </div>
    );
  }
}

export default Review;
