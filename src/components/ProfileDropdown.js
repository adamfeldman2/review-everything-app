import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { startLogout } from '../actions/auth';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownVisible: false
    };

    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    console.log('DROPDOWN CLICKED');
    this.setState(() => {
      return {
        dropdownVisible: true
      };
    });
  }

  render() {
    const accountCreation = moment(this.props.accountCreation).format('MMM D, YYYY');
    return (
      <div className="wrapper-profile-dropdown" onClick={this.handleDropdown}>
        {this.props.email} <span className="caret">&#9660;</span>
        <ul>
          <li>User Since: {accountCreation}</li>
          {/* <div className="divider" /> */}
          {/* <Link to="/profile">
            <li>Profile</li>
          </Link> */}
          <li className="logout" onClick={this.props.startLogout}>
            Logout
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    accountCreation: state.auth.accountCreation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => {
      dispatch(startLogout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
