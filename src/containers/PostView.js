/**
 * Created by sang on 12/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostActions from '../actions/posts';
import WrapContainer from './WrapContainer';
import { Sidebar, CategoryCard, PostView } from '../components';

class PostViewContainer extends Component {
  componentDidMount() {
    const slug = this.props.location.pathname.slice(7);
    this.props.getCurrentPost(slug);
  }
  render() {
    const { post, fetching } = this.props;
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <Sidebar>
            <CategoryCard />
          </Sidebar>
          <div className="v-page">
            { fetching && <h1>Loading</h1> }
            { !fetching && !post && <h1>Bài viết không tồn tại</h1>}
            { !fetching && post && <PostView post={post} />}
          </div>
        </WrapContainer>
      </div>
    );
  }
}

PostViewContainer.propTypes = {
  getCurrentPost: PropTypes.func,
  location: PropTypes.object,
  post: PropTypes.object,
}

const mapStateToProps = state => ({
  post: state.posts.currentPost,
  fetching: state.posts.fetching,
});

const mapDispatchToProps = dispatch => ({
  getCurrentPost: slug => dispatch(PostActions.loadPostRequest(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostViewContainer);
