import React, { Component } from 'react';
import { TopMenu, Sidebar, ContentList } from '../components';
import { setTitle } from '../utils';

export default class Home extends Component {
  componentDidMount() {
    setTitle('Trang chủ');
  }
  render() {
    return (
      <div className="v-wrap">
        <div className="v-page">
          <TopMenu />
          <ContentList />
        </div>
        <Sidebar />
      </div>
    );
  }
}
