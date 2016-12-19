/**
 * Created by sang on 12/6/16.
 */
import React, { Component, PropTypes } from 'react';
import { Panel, Image } from 'react-bootstrap';

const logo = require('../../assets/images/logo.jpg');

class ProfileCard extends Component {
  componentDidMount() {

  }
  render() {
    const { avatar, title, subtitle } = this.props;
    return (
      <Panel className="v-profile">
        <div className="header">
          <h2 className="title">{subtitle}</h2>
        </div>
        <Image className="image" src={avatar} width="75" height="75" circle />
        <h5 className="subtitle">{title}</h5>
      </Panel>
    );
  }
}

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

ProfileCard.defaultProps = {
  avatar: logo,
  title: "VTeam",
  subtitle: "@vteamglobal",
}


export default ProfileCard;

