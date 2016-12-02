import React, { Component } from 'react';
import { TopMenu, Sidebar, ContentList } from '../components';
import WrapContainer from './WrapContainer';
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
          <WrapContainer animatedIn="fadeIn">
            <ContentList />
          </WrapContainer>
        </div>
        <Sidebar />
      </div>
    );
  }
}
