import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Review = props => {
  const { title, date, category, stars, note } = props;
  return (
    <div>
      <div className="wrapper-review">
        {props.titleUnlinkable ? (
          <h3>{title}</h3>
        ) : (
          <Link to={`/review/${props.id}`}>
            <h3>{title}</h3>
          </Link>
        )}

        <div className="category">Category: {category}</div>
        <div>{moment(date).format('MMM D, YYYY')}</div>
        <ReactStars
          count={5}
          value={stars}
          edit={false}
          size={20}
          color2={'#ffd700'}
          className={'stars-wrapper'}
        />
        <div className="note">Note: {note}</div>
      </div>
    </div>
  );
};

export default Review;
