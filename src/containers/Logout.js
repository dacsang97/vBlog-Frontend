/**
 * Created by sang on 12/7/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AuthActions from '../actions/auth';

class Logout extends Component {
  constructor(props) {
    super(props);
    props.logout();
  }
  render() {
    return (
      <br />
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout()),
})

export default connect(null, mapDispatchToProps)(Logout);
