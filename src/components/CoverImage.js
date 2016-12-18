/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

const bgVteam = require('../assets/images/bg_vteam.png');

const CoverImage = (props) => {
  const { coverLink } = props;
  return (
    <Image className="cover" src={coverLink} />
  );
};

CoverImage.defaultProps = {
  coverLink: bgVteam,
};

CoverImage.propTypes = {
  coverLink: PropTypes.string,
};

export default CoverImage;
