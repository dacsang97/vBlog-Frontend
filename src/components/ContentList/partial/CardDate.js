/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';
import moment from 'moment';

const CardDate = (props) => {
  const date = moment(props.date);
  const month = date.format("MMM");
  const day = date.format("D");
  return (
    <date className="card__date">
      <span className="card__date__day">{day}</span>
      <br />
      <span className="card__date__month">{month}</span>
    </date>
  );
}

CardDate.propTypes = {
  date: PropTypes.string.isRequired,
}

export default CardDate;
