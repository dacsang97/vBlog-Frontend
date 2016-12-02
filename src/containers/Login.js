import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Row, Col, Card, CardBlock } from 'reactstrap';
import validator from 'validator';
import LoginForm from '../components/LoginForm/LoginForm';
import { setTitle } from '../utils';
import WrapContainer from './WrapContainer';
import AuthAction from '../actions/auth';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    setTitle("Login");
  }
  onSubmit(e) {
    console.log(e);
    const { email, password } = e;
    this.props.attemptLogin(email, password);
  }
  render() {
    return (
      <Row style={{ marginTop: 60 }}>
        <Col
          xs={{ size: 12 }}
          md={{ size: 8, offset: 2 }}
          sm={{ size: 10, offset: 1 }}
        >
          <WrapContainer animatedIn="fadeIn">
            <Card>
              <CardBlock>
                <LoginForm {...this.props} onSubmit={this.onSubmit} />
              </CardBlock>
            </Card>
          </WrapContainer>

        </Col>
      </Row>
    );
  }
}

LoginContainer.propTypes = {
  attemptLogin: PropTypes.func,
}

const validate = (values) => {
  const { email, password } = values;
  const errors = {};
  if (!email) {
    errors.email = 'Required';
  } else
    if (!validator.isEmail(email)) errors.email = 'Not valid email';
  if (!password) errors.password = 'Required';
  return errors;
};

function mapDispatchToProps(dispatch) {
  return {
    attemptLogin: (email, password) => dispatch(AuthAction.loginRequest(email, password)),
  };
}

const Login = reduxForm({
  form: 'Login',
  validate,
})(LoginContainer);

export default connect(null, mapDispatchToProps)(Login);
