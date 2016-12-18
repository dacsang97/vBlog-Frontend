/**
 * Created by sang on 12/16/16.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PostTitle = (props) => {
  const { title, slug } = props.post;
  const link = `/post/${slug}`;
  return (
    <Link to={{ pathname: link, state: props }}>
      {title.rendered}
    </Link>
  );
}

PostTitle.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostTitle;
