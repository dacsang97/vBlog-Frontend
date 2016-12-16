/**
 * Created by sang on 12/7/16.
 */
import React, { PropTypes } from 'react';
import moment from 'moment';
import { Panel, Col, Media } from 'react-bootstrap';
import { PostTitle, UserAvatar } from './partial';
import { createHtml } from '../../utils';

const PostItem = (props) => {
  const { post, author } = props;
  const date = moment(post.date).fromNow();
  return (
    <Col md={6} xs={12} className="content-item-wrap">
      <Panel style={{ marginBottom: 15 }}>
        <Media>
          <Media.Left>
            <UserAvatar author={author} />
          </Media.Left>
          <Media.Body>
            <Media.Heading style={{ color: "#1F8A70", borderBottom: "1px solid #dedede", paddingBottom: '5px' }}>
              <PostTitle title={post.title.rendered} slug={post.slug} />
            </Media.Heading>
            <div dangerouslySetInnerHTML={createHtml(post.excerpt.rendered)} />
            <p className="v-content-para">Posted by <span className="author">{author.name}</span> {date}</p>
          </Media.Body>
        </Media>
      </Panel>
    </Col>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PostItem;
