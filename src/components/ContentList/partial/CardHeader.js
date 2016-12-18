/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';

const CardHeader = (props) => {
  const { image } = props;
  return (
    <header className="card__thumb">
      <a href="#">
        <img src={image.thumb} role="presentation" />
      </a>
    </header>
  );
}

CardHeader.propTypes = {
  image: PropTypes.object.isRequired,
}

export default CardHeader;
