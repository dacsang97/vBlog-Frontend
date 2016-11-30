import React, { PropTypes } from 'react';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';

const Navbar = (props) => {
  const { auth: { guest, user } } = props;
  return (
    <div>
      <div className="header">
        <div className="headerContainer">
          <div className="left">
            <a href="#" className="a-menu">
              <i className="icon-menu" />
            </a>
          </div>
          <a className="logo">
            <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="" />
            Blog
          </a>
          <div className="right">
            { guest ?
              <a href="#" className="a-menu">
                <i className="icon-login" />
              </a> :
              user ?
                <a href="#" className="a-menu">
                  <i className="icon-login" />
                </a>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.object,
}

export default Navbar;

