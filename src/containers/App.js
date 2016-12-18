import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
// import { browserHistory } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    auth: PropTypes.object,
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar auth={this.props.auth} />
        <Grid>
          {children}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
});


export default connect(mapStateToProps)(App);
