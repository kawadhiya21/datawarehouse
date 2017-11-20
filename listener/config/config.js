YAML = require('yamljs');

const path = require('path');
const file_path = path.dirname(require.main.filename);

const allowed_events = YAML.load(file_path+'/config/allowed_events.yml');
const config = YAML.load(file_path+'/config/config.yml');

module.exports = {
  'allowed_events' : allowed_events,
  'config' : config
}
