/**
 * Created by sang on 12/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';
import PostCover from './partial/PostCover';
import PostContent from './partial/PostContent';

class PostView extends Component {
  componentDidMount() {

  }
  render() {
    const { title, featured_image: image, content } = this.props.post;
    return (
      <Panel className="v-thread">
        <PostCover title={title} image={image} />
        <PostContent content={content} />
        <FacebookProvider appID="245853192502636">
          <Comments href="http://localhost:3000/posts/the-fourth-post" />
        </FacebookProvider>
      </Panel>
    );
  }
}

PostView.propTypes = {
  post: PropTypes.object,
}

export default PostView;
