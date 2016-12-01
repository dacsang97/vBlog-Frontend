import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
// import { browserHistory } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { checkToken } from '../actions/auth';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    checkToken: PropTypes.func,
    auth: PropTypes.object,
  }
  componentDidMount() {
    this.props.checkToken("fkdjfkdjf");
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

export default connect(mapStateToProps, {
  checkToken,
})(App);
