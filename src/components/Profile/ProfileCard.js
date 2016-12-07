/**
 * Created by sang on 12/6/16.
 */
import React from 'react';
import { Card, CardBlock, Nav } from 'reactstrap';
import { NavItemLink } from '../';
import './profileCard.scss';

const CardTitle = () => (
  <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
    <h6 style={{ marginBottom: 5 }}><i className="icon-user" /> Profile</h6>
    <hr />
  </div>
);

const ProfileCard = () => (
  <Card>
    <CardTitle />
    <CardBlock style={{ paddingTop: '1em' }}>
      <Nav>
        <NavItemLink info="Thông tin cá nhân" link="/profile" />
        <NavItemLink info="Thay đổi mật khẩu" link="/change-password" />
        <NavItemLink info="Đăng xuất" link="/logout" />
      </Nav>
    </CardBlock>
  </Card>
);

export default ProfileCard;

