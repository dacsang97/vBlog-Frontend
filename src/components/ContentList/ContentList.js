/**
 * Created by sang on 11/28/16.
 */
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Masonry from 'react-masonry-component';

export default class ContentList extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Row className="content-list">
        <Masonry options={{ transitionDuration: 700 }}>
          <Col className="content-item-wrap">
            <div className="content-item">
              1
            </div>
          </Col>
          <Col className="content-item-wrap">
            <div className="content-item">
              2
            </div>
          </Col>
          <Col className="content-item-wrap">
            <div className="content-item">
              3
            </div>
          </Col>
          <Col className="content-item-wrap">
            <div className="content-item">
              4
            </div>
          </Col>
        </Masonry>
      </Row>
    );
  }
}
