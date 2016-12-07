/**
 * Created by sang on 12/6/16.
 */
import React, { PropTypes } from 'react';
import { splitName } from '../../utils';

const UserInfo = (props) => {
  const user = props.user;
  return (
    <div>
      <div className="user-avatar-component size-25">
        <div className="avatar avatar-component character" style={{ backgroundColor: '#FF6138' }}>
          <span>
            <span className="character">
              {splitName(user.display_name)}
            </span>
          </span>
        </div>
        <div className="information">
          <div className="name">{user.email}</div>
          <div className="name-label">{user.display_name}</div>
        </div>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserInfo;
