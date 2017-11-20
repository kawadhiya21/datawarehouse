const env = process.env.ENV_VARIABLE;
const config = require('../config/config.js');

var Redis = require('ioredis');
var redis = new Redis(config['config']['redis']['port'], config['config']['redis']['host']);

if (env != 'production') {
  module.exports = {
    'write' : redis,
    'read' : redis
  }
}
