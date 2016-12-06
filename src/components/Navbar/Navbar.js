import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import UserInfo from './UserInfo';

const Navbar = (props) => {
  const { auth: { guest, user } } = props;
  return (
    <div>
      <div className="header">
        <div className="headerContainer">
          <div className="left">
            <Link to="#" className="a-menu">
              <i className="icon-menu" />
            </Link>
          </div>
          <div className="logo">
            <Link to="/" className="a-menu">
              <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="" />
              Blog
            </Link>
          </div>
          <div className="right">
            { guest ?
              <Link to="/login" className="a-menu">
                <i className="icon-login" />
              </Link> :
              user ?
                <a href="#" className="a-menu">
                  <UserInfo user={user} />
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

