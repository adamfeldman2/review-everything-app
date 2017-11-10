import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <div className="wrapper wrapper-header">
        <Link to="/">
          <h1>Review Everything</h1>
        </Link>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="is-active">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
