/**
 * Created by sang on 12/16/16.
 */
import React, { Component } from 'react';
import { createHtml } from '../../utils';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.post = props.post;
  }
  componentDidMount() {

  }
  render() {
    const title = this.post.title.rendered;
    return (
      <div>
        <h1>{title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={createHtml(this.post.content.rendered)} />
      </div>
    );
  }
}

export default PostView;
