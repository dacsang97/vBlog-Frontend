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
    const { posts, users } = this.props;
    return posts.map((item, id) => {
      const author = users[item.author - 1];
      return (
        <PostItem key={id} post={item} author={author} />
      );
    });
  }
  render() {
    const posts = !this.props.fetching ? this.renderPost() : null;
    return (
      <Row className="content-list">
        <WrapContainer animatedIn="fadeIn" animatedOut="zoomOut">
          { this.props.fetching && <h1>Loading</h1>}
          { !this.props.fetching &&
            (
              <Masonry options={{ transitionDuration: 700 }}>
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
  users: PropTypes.array,
  fetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  users: state.users.users,
  fetching: state.users.fetching,
});

export default connect(mapStateToProps)(ContentList);
