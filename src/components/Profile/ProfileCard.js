/**
 * Created by sang on 12/6/16.
 */
import React, { Component } from 'react';
import { Panel, Nav } from 'react-bootstrap';
import { NavItemLink } from '../';

class ProfileCard extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Panel className="widget" header="Profile">
        <Nav>
          <NavItemLink info="Thông tin cá nhân" link="/profile" />
          <NavItemLink info="Thay đổi mật khẩu" link="/change-password" />
          <NavItemLink info="Đăng xuất" link="/logout" />
        </Nav>
      </Panel>
    );
  }
}


export default ProfileCard;

