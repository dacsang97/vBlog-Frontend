/**
 * Created by sang on 12/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostActions from '../actions/posts';
import UserActions from '../actions/users';
import WrapContainer from './WrapContainer';
import { Sidebar, CategoryCard, PostView, Loading, ProfileCard } from '../components';

class PostViewContainer extends Component {
  componentDidMount() {
    const slug = this.props.location.pathname.slice(7);
    this.props.getCurrentPost(slug);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post !== this.props.post) {
      const { post } = nextProps;
      const userId = post.author.id;
      this.props.getCurrentUser(userId);
    }
  }
  render() {
    const { post, fetching, user } = this.props;
    let avatar;
    let title;
    let subtitle;
    if (user) {
      console.log(user);
      avatar = user.avatar_urls["96"];
      title = user.name;
      subtitle = `@${user.slug}`;
    }
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <Sidebar>
            <ProfileCard avatar={avatar} title={title} subtitle={subtitle} />
            <CategoryCard />
          </Sidebar>
          <div className="v-page">
            { fetching && <Loading /> }
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
  getCurrentUser: PropTypes.func,
  location: PropTypes.object,
  post: PropTypes.object,
  fetching: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.users.currentUser,
  post: state.posts.currentPost,
  fetching: state.posts.fetching,
});

const mapDispatchToProps = dispatch => ({
  getCurrentPost: slug => dispatch(PostActions.loadPostRequest(slug)),
  getCurrentUser: userId => dispatch(UserActions.loadUserRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostViewContainer);
