import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
// import { browserHistory } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import AuthAction from '../actions/auth';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    checkToken: PropTypes.func,
    auth: PropTypes.object,
  }
  componentDidMount() {
    this.props.checkToken();
  }
  componentDidUpdate() {

  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar auth={this.props.auth} />
        <Container>
          {children}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(AuthAction.checkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
