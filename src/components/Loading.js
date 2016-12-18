/**
 * Created by sang on 12/18/16.
 */
import React from 'react';
import { Image } from 'react-bootstrap';

const loading = require('../assets/images/loading.gif');

const Loading = () => (
  <div className="text-center">
    <Image src={loading} />
  </div>
);

export default Loading;
