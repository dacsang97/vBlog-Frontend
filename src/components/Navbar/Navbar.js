import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';

const VNavbar = () => (
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
    </Navbar.Collapse>
  </Navbar>
);

export default VNavbar;

