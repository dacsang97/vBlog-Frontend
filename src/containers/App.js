import React, { Component, PropTypes } from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import '../assets/css/styles.scss';
import '../assets/css/simple-line-icons.scss';
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
        <div className="container">
          {children}
        </div>
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
