/**
 * Created by sang on 12/7/16.
 */
import React, { Component, PropTypes } from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavItemLink extends Component {
  constructor(props) {
    super(props);
    this.getClass = this.getClass.bind(this);
  }
  getClass() {
    const { location } = this.context;
    const { link } = this.props;
    const className = ["v-nav-item"];
    if (location.pathname === link) {
      className.push("active");
    }
    return classNames(className);
  }
  render() {
    const { info, link } = this.props;
    return (
      <NavItem className={this.getClass()}>
        <Link to={link}>{info}</Link>
      </NavItem>
    );
  }
}

NavItemLink.propTypes = {
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

NavItemLink.contextTypes = {
  location: PropTypes.object,
};

export default NavItemLink;
