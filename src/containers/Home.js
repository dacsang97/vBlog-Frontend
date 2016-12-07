import React, { Component } from 'react';
import { TopMenu, Sidebar, ContentList, SearchCard, CategoryCard } from '../components';
import WrapContainer from './WrapContainer';
import { setTitle } from '../utils';

export default class Home extends Component {
  componentDidMount() {
    setTitle('Trang chủ');
  }
  render() {
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <div className="v-page">
            <TopMenu />
            <ContentList />
          </div>
          <Sidebar>
            <SearchCard />
            <CategoryCard />
          </Sidebar>
        </WrapContainer>
      </div>
    );
  }
}
