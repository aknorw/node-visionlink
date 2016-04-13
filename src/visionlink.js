import request from 'request';
import { parseString } from 'xml2js';

import { VL_TOPICS } from './topics';
import mergeObjects from './utils/mergeObjects';

function VLRequest(api, username, password) {

  return (queue_name, queue_position, options, callback) => {

    if (typeof queue_name === 'number') {
      if (typeof queue_position === 'function') {
        callback = queue_position;
        options = {};
        queue_position = queue_name;
        queue_name = 'testqueue';
      } else {
        callback = options;
        options = queue_position;
        queue_position = queue_name;
        queue_name = 'testqueue';
      }
    } else if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    let opt = {
      'url': `https://www.myvisionlink.com/APIService/${api.context}/v${api.version.toString()}/${api.service}`,
      'headers': {
        'Authorization': `Basic ${new Buffer(username + ':' + password).toString('base64')}`
      }
    }

    if (api.topic) {
      opt.url += `/${queue_name}/${api.topic}/${queue_position}`
    }

    if (typeof options === 'object') {
      mergeObjects(opt, options);
    }

    request(opt, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        parseString(body, { trim: true, explicitArray: false }, (err, obj) => {
          callback(null, obj);
        })
      }
    })

  }

}

export default function (username, password) {

  const functions = {};

  for (var i = 0 ; i < VL_TOPICS.length ; i++) {
    functions[VL_TOPICS[i].name] = VLRequest(VL_TOPICS[i], username, password);
  }

  return functions;

}
