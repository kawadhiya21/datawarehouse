YAML = require('yamljs');

const path = require('path');
const file_path = path.dirname(main.require.filename);

let allowed_events = YAML.load(file_path+'allowed_events.yml');
let config = YAML.load(file_path+'config.yml');

module.exports = {
  allowed_events: allowed_events,
  config: config
}
