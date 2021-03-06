/**
 * Created by sang on 12/6/16.
 */
import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Sidebar, ProfileForm, ProfileCard } from '../components';
import WrapContainer from './WrapContainer';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  getChildContext() {
    return {
      location: this.props.location,
    }
  }
  onSubmit(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="v-wrap">
        <WrapContainer animatedIn="fadeIn">
          <div className="v-page">
            <Panel>
              <ProfileForm onSubmit={this.onSubmit} {...this.props} />
            </Panel>
          </div>
          <Sidebar>
            <ProfileCard />
          </Sidebar>
        </WrapContainer>
      </div>
    );
  }
}

ProfileContainer.childContextTypes = {
  location: PropTypes.object,
};

ProfileContainer.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  initialValues: state.auth.authenticated.user,
});

const Profile = connect(mapStateToProps)(reduxForm({
  form: 'Profile',
})(ProfileContainer));

export default Profile;
