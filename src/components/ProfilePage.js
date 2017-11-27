import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = props => {
  return (
    <div>
      <div className="wrapper wrapper-profile-page">
        <h1>Profile</h1>
        <p>This is from the Profile page.</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps)(ProfilePage);
