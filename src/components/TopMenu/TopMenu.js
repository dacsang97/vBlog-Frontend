/**
 * Created by sang on 11/28/16.
 */
import React from 'react';
import { Menu } from 'antd';
import { Icon } from '../';

const TopMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="new-feed">
      <Icon name="icon-feed" /> Mới nhất
    </Menu.Item>
    <Menu.Item key="popular">
      <Icon name="icon-chart" /> Nổi bật
    </Menu.Item>
  </Menu>
);


export default TopMenu;
