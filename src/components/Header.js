import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <div className="wrapper wrapper-header">
        <h1>Review Everything</h1>
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
