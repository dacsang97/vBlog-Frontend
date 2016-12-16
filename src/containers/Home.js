import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
    this.props.getPreData();
  }
  render() {
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <div className="v-page">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title={<Tab1Title />}><ContentList /></Tab>
              <Tab eventKey={2} title={<Tab2Title />}>Tính năng đang phát triển</Tab>
            </Tabs>
          </div>
          <WrapContainer animatedOut="fadeOut">
            <Sidebar>
              <SearchCard />
              <CategoryCard />
            </Sidebar>
          </WrapContainer>
        </WrapContainer>
      </div>
    );
  }
}

Home.propTypes = {
  getPreData: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  getPreData: () => dispatch({ type: 'GET_PRE_DATA' }),
});

export default connect(null, mapDispatchToProps)(Home);
