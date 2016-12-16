/**
 * Created by sang on 12/2/16.
 */
const env = {};

if (process.env.NODE_ENV === 'production') {
  env.BASE_URL = 'https://api.vteam.info/wp-json/wp/v2/';
} else {
  env.BASE_URL = 'http://api.vblog.dev/wp-json/wp/v2';
}

export default env;
