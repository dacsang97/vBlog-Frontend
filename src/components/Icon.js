import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  componentWillMount() {}
  render() {
    const { name } = this.props;
    return (
      <i className={name} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
