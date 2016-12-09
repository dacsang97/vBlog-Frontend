import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import UserInfo from './UserInfo';

const VNavbar = (props) => {
  const { auth: { guest, user } } = props;
  return (
    <Navbar className="v-navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} width="35" height="35" alt="VBlog" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="https://github.com/dacsang97/">Github</NavItem>
          <NavItem eventKey={2} href="#">Facebook</NavItem>
        </Nav>
        <Nav pullRight>
          { guest ?
            <LinkContainer to="/login"><NavItem>Đăng nhập</NavItem></LinkContainer> :
            user ? <Link to="/profile"><UserInfo user={user} /></Link> : null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

VNavbar.propTypes = {
  auth: PropTypes.object,
}

export default VNavbar;

