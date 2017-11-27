import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    return (
      <div className="email-dropdown" onClick={this.handleDropdown}>
        {this.props.email} &#8595;
        <ul>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps)(ProfileDropdown);
