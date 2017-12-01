import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Review = props => {
  const { title, date, category, stars, note } = props;
  return (
    <div>
      <div className="wrapper-review">
        <div className="wrapper-title-date-stars">
          <div className="wrapper-title-date">
            {props.titleUnlinkable ? (
              <h3>{title}</h3>
            ) : (
              <Link to={`/review/${props.id}`}>
                <h3>{title}</h3>
              </Link>
            )}
            <div className="date">{moment(date).format('MMM D, YYYY')}</div>
          </div>
          <ReactStars
            count={5}
            value={stars}
            edit={false}
            size={20}
            color1={'#f3f3f3'}
            color2={'#33a9d8'}
            className={'stars-wrapper'}
          />
        </div>
        <div className="note">{note}</div>
      </div>
    </div>
  );
};

export default Review;
