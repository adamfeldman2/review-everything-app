import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = props => {
  return (
    <div>
      <button onClick={props.startLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => {
      dispatch(startLogin());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
