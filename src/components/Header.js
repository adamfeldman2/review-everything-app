import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = props => {
  return (
    <div>
      <button onClick={props.startLogout}>Logout</button>
      <div className="wrapper wrapper-header">
        <Link to="/reviews">
          <h1>Review Everything</h1>
        </Link>
        <ul>
          <li>
            <NavLink to="/reviews" activeClassName="is-active">
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

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => {
      dispatch(startLogout());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
