import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Sidebar, ContentList, SearchCard, CategoryCard, Icon } from '../components';
import WrapContainer from './WrapContainer';
import { setTitle } from '../utils';

const Tab1Title = () => (
  <div><Icon name="icon-feed" /> Mới nhất</div>
);

const Tab2Title = () => (
  <div><Icon name="icon-chart" /> Nổi bật</div>
);

class Home extends Component {
  componentDidMount() {
    setTitle('Trang chủ');
  }
  render() {
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <Sidebar>
            <SearchCard />
            <CategoryCard />
          </Sidebar>
          <div className="v-page">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title={<Tab1Title />}><ContentList /></Tab>
              <Tab eventKey={2} title={<Tab2Title />}>Tính năng đang phát triển</Tab>
            </Tabs>
          </div>
        </WrapContainer>
      </div>
    );
  }
}

export default (Home);
