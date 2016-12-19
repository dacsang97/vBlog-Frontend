/**
 * Created by sang on 11/28/16.
 */
import React, { Component, PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import Masonry from 'react-masonry-component';
import WrapContainer from '../../containers/WrapContainer';
import { Loading } from '../';
import PostItem from './PostItem';

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  componentDidMount() {

  }
  renderPost() {
    const { posts, users } = this.props;
    return posts.map((item, id) => {
      const authorId = item.author.id;
      const author = _.find(users, { id: authorId });
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
          { this.props.fetching && <Loading />}
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
