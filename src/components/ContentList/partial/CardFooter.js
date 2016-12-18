/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';
import moment from 'moment';

const CardFooter = (props) => {
  const date = moment(props.date).fromNow();
  return (
    <footer className="card__footer">
      <span className="icon icon-clock" /> {date}
    </footer>
  );
}

CardFooter.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CardFooter;
