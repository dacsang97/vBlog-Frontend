/**
 * Created by sang on 12/16/16.
 */
import React, { Component } from 'react';
import WrapContainer from './WrapContainer';
import { Sidebar, CategoryCard, PostView } from '../components';

class PostViewContainer extends Component {
  componentDidMount() {

  }
  render() {
    const { post } = this.props.location.state;
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <Sidebar>
            <CategoryCard />
          </Sidebar>
          <div className="v-page">
            <PostView post={post} />
          </div>
        </WrapContainer>
      </div>
    );
  }
}


export default PostViewContainer;
