const config = require('./config/config.js');

function is_json(msg) {
  try {
    JSON.parse(msg);
    return true
  } catch (e) {
    return false
  }
}

function has_req_key(msg) {
  const json_msg = JSON.parse(msg);
  const key = config['config']['auth']['required_key'];

  if (json_msg['data'] && json_msg['data'][key]) {
    return true;
  }

  return false
}

function matches_api_key(msg) {
  const json_msg = JSON.parse(msg);
  const api_key = config['config']['auth']['api_key'];

  if (api_key == json_msg['api_key']) {
    return true;
  }

  return false;
}

function matches_event(msg) {
  const json_msg = JSON.parse(msg);
  const allowed_events = config['allowed_events']['events'];

  if (allowed_events.indexOf(json_msg['event']) > -1) {
    return true
  }

  return false;
}

function validate(msg) {
  res = {
    'success' : false,
    'error' : ''
  }
  if (is_json(msg)) {
    if (has_req_key(msg)) {
      if (matches_api_key(msg)) {
        if (matches_event(msg)) {
          res['success'] = true;
        } else { res['error'] = 'event_type_not_listed'; }
      } else { res['error'] = 'api_key_auth_error'; }
    } else { res['error'] = 'required_key_absent'; }
  } else { res['error'] = 'not_a_proper_json'; }

  return res;
}

module.exports = validate;
