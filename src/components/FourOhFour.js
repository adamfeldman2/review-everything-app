import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = props => {
  return (
    <div>
      <div className="wrapper wrapper-fourohfour">
        <h1>404!</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>
          Let's get you back <Link to="/">home</Link>.
        </p>
      </div>
    </div>
  );
};

export default FourOhFour;
