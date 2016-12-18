/**
 * Created by sang on 12/18/16.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { createHtml } from '../../../utils';

const CardBody = (props) => {
  const { title, excerpt, slug } = props;
  return (
    <div className="card__body">
      <div className="card__category">
        <a href="#">Category</a>
      </div>
      <h2 className="card__title">
        <Link to={`/posts/${slug}`}>
          {title}
        </Link>
      </h2>
      <div className="card__subtitle">Bender is frying Doc !</div>
      <div className="card__description" dangerouslySetInnerHTML={createHtml(excerpt)} />
    </div>
  );
}

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CardBody;
