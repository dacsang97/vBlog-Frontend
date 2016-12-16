/**
 * Created by sang on 12/16/16.
 */
import React, { PropTypes } from 'react';

const UserAvatar = (props) => {
  const avatar = props.author.avatar_urls["48"];
  return (
    <img width={35} height={35} src={avatar} style={{ borderRadius: '500rem' }} alt="vteam" />
  );
}

UserAvatar.propTypes = {
  author: PropTypes.object.isRequired,
}

export default UserAvatar;
