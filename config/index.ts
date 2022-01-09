const isDev = process.env.NODE_ENV !== 'production';
let config: any = {};
if (isDev) {
  config = require('./dev.json');
}

export default config;
