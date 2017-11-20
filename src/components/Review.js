import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

const Review = props => {
  const { title, date, category, stars, note } = props;

  return (
    <div>
      <div className="wrapper-review">
        <h3>{title}</h3>
        <div>Category: {category}</div>
        <div>{moment(date).format('MMM D, YYYY')}</div>
        <ReactStars
          count={5}
          value={stars}
          edit={false}
          size={20}
          color2={'#ffd700'}
          className={'stars-wrapper'}
        />
        <div>Note: {note}</div>
      </div>
    </div>
  );
};

export default Review;
