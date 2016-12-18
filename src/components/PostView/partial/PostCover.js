/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';

const PostCover = (props) => {
  const { title, image } = props;
  return (
    <div className="v-thread-cover">
      <img className="thread-image" src={image.full} alt="fdkfjd" />
      <div className="bg">
        <p className="thread-title">{title}</p>
      </div>
    </div>
  );
};

PostCover.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default PostCover;
