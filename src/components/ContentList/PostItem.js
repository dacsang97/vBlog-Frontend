/**
 * Created by sang on 12/7/16.
 */
import React, { PropTypes } from 'react';
import { Panel, Col, Media } from 'react-bootstrap';
import { quote } from '../../utils';
import avatar from '../../assets/images/avatar.png';

const PostItem = (props) => {
  const post = props.post;
  const author = props.post.author.data;
  return (
    <Col md={6} xs={12} className="content-item-wrap">
      <Panel style={{ marginBottom: 15 }}>
        <Media>
          <Media.Left>
            <img width={35} height={35} src={avatar} style={{ borderRadius: '500rem' }} alt="vteam" />
          </Media.Left>
          <Media.Body>
            <Media.Heading style={{ color: "#1F8A70", borderBottom: "1px solid #dedede", paddingBottom: '5px' }}>
              {quote(post.title, 30)}
            </Media.Heading>
            <p className="v-content-para">{quote(post.content, 200)}</p>
            <p className="v-content-para">Posted by <span className="author">{author.display_name}</span> {post.released}</p>
          </Media.Body>
        </Media>
      </Panel>
    </Col>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
