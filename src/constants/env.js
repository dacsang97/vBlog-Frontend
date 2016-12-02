/**
 * Created by sang on 12/2/16.
 */
const env = {};

if (process.env.NODE_ENV === 'production') {
  env.BASE_URL = 'http://api.vteam.info';
} else {
  env.BASE_URL = 'http://api.vteam.dev';
}

export default env;
