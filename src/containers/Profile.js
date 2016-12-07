/**
 * Created by sang on 12/6/16.
 */
import React, { PropTypes } from 'react';
import { Sidebar, ProfileCard, CategoryCard } from '../components';
import WrapContainer from './WrapContainer';

class Profile extends React.Component {
  componentDidMount() {

  }
  getChildContext() {
    return {
      location: this.props.location,
    }
  }
  render() {
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <div className="v-page">
            <h1>Đây là trang cá nhân</h1>
          </div>
          <Sidebar>
            <ProfileCard x="1" />
            <CategoryCard />
          </Sidebar>
        </WrapContainer>
      </div>
    )
  }
}

Profile.childContextTypes = {
  location: PropTypes.object,
}

Profile.propTypes = {
  location: PropTypes.object,
}

export default Profile;
