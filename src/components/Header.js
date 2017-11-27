import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = props => {
  return (
    <div>
      <button onClick={props.startLogout}>Logout</button>
      <div className="wrapper wrapper-header">
        <ProfileDropdown />
        <Link to="/reviews">
          <h1>Review Everything</h1>
        </Link>
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
