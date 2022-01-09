const env = process.env.NODE_ENV || 'development';

const config = require(`../../config/${env}.json`);

export default config;
