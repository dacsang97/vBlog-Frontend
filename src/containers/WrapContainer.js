/**
 * Created by sang on 12/1/16.
 */
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

class WrapContainer extends Component {
  constructor(props) {
    super(props);
    this.getWrapClassName = this.getWrapClassName.bind(this);
  }
  getWrapClassName() {
    const className = [];
    if (this.props.class) className.push(this.props.class);
    className.push('animated');
    if (this.props.out) {
      className.push(this.props.animatedOut);
    } else
      if (this.props.animatedIn) className.push(this.props.animatedIn);
    return classNames(className);
  }
  render() {
    this.getWrapClassName();
    return (
      <div className={this.getWrapClassName()}>
        {this.props.children}
      </div>
    );
  }
}

WrapContainer.propTypes = {
  children: PropTypes.node,
  class: PropTypes.string,
  out: PropTypes.bool,
  animatedIn: PropTypes.string,
  animatedOut: PropTypes.string,
};

export default WrapContainer;
