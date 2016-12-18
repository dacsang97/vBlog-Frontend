/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';
import { createHtml } from '../../../utils';

const PostContent = (props) => {
  const { content } = props;
  return (
    <div className="v-thread-content" dangerouslySetInnerHTML={createHtml(content)} />
  );
}

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default PostContent;
