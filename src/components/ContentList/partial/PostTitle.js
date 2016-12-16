/**
 * Created by sang on 12/16/16.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PostTitle = (props) => {
  const { title, slug } = props;
  const link = `/post/${slug}`;
  return (
    <Link to={link}>
      {title}
    </Link>
  );
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default PostTitle;
