import React, { Component } from 'react';
import { TopMenu, Sidebar, ContentList } from '../components';

export default class Home extends Component {
  componentDidMount() {

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
