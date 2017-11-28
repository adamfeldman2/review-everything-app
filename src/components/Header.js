import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="wrapper-header">
      <div className="wrapper wrapper-content">
        <Link to="/reviews">
          <h1>Review Everything</h1>
        </Link>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
