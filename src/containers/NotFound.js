/**
 * Created by sang on 12/18/16.
 */
import React, { Component } from 'react';
import '../assets/css/not_found.scss';

class NotFound extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="container-content">
        <div className="content">
          <canvas className="snow" id="snow" />
          <div className="main-text">
            <h1>Aw jeez.<br />That page has gone missing.</h1><
            a className="home-link" href="#">Hitch a ride back home.</a>
          </div>
          <div className="ground">
            <div className="mound">
              <div className="mound_text">404</div>
              <div className="mound_spade" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
