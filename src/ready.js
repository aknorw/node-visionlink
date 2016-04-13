import request from 'request';
import { parseString } from 'xml2js';

import { READY_TOPICS } from './topics';
import mergeObjects from './utils/mergeObjects';

function readyRequest(api, username, password) {

  return (page, options, callback) => {

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    let opt = {
      'url': `https://api.myvisionlink.com/${api}/page/${page.toString()}`,
      'headers': {
        'Authorization': `Basic ${new Buffer(username + ':' + password).toString('base64')}`
      }
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

  for (var i = 0 ; i < READY_TOPICS.length ; i++) {
    functions[READY_TOPICS[i]] = readyRequest(READY_TOPICS[i], username, password);
  }

  return functions;

}
