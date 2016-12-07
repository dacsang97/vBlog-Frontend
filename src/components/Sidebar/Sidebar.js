/**
 * Created by sang on 11/28/16.
 */
import React, { PropTypes } from 'react';

const Sidebar = props => (
  <div className="v-sidebar">
    {props.children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node,
}


export default Sidebar;
