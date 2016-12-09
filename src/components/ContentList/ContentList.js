/**
 * Created by sang on 11/28/16.
 */
import React, { Component, PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import WrapContainer from '../../containers/WrapContainer';
import PostItem from './PostItem';

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  renderPost() {
    const { posts } = this.props;
    return posts.map((item, id) => (
      <PostItem key={id} post={item} />
    ));
  }
  render() {
    const posts = this.props.posts ? this.renderPost() : null;
    return (
      <Row className="content-list">
        <WrapContainer animatedIn="fadeIn" animatedOut="zoomOut">
          { !this.props.posts && <h1>Loading</h1>}
          { this.props.posts &&
            (
              <Masonry options={{ transitionDuration: 700 }}>
                {posts}
                {posts}
                {posts}
                {posts}
              </Masonry>
            )
          }
        </WrapContainer>
      </Row>
    );
  }
}

ContentList.propTypes = {
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: state.posts.posts.data,
});

export default connect(mapStateToProps)(ContentList);
