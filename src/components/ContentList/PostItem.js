/**
 * Created by sang on 12/7/16.
 */
import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { CardHeader, CardDate, CardBody, CardFooter } from './partial';

const PostItem = (props) => {
  const { date, featured_image: image, title, excerpt, slug } = props.post;
  const { author } = props;
  return (
    <Col md={4} sm={6} xs={12} className="content-item-wrap">
      <div className="card">
        <CardHeader image={image} />
        <CardDate date={date} />
        <CardBody
          title={title} excerpt={excerpt} slug={slug}
          author={author}
        />
        <CardFooter date={date} />
      </div>
    </Col>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PostItem;
