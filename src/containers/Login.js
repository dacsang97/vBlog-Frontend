import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';

class LoginContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Row style={{ marginTop: 75 }}>
        <Col
          xs={{ size: 12 }}
          md={{ size: 8, offset: 2 }}
          sm={{ size: 10, offset: 1 }}
        >
          <Card>
            <h1>Đây là trang login</h1>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LoginContainer;
