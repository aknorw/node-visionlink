import request from 'request';
import { parseString } from 'xml2js';

import { READY_TOPICS } from './topics';

const readyRequest = (api, username, password) => {

  return ({ page = 1, options = {} } = {}) => {

    const opt = Object.assign({}, {
      url: `https://api.myvisionlink.com/${api}/page/${page.toString()}`,
      headers: {
        Authorization: `Basic ${new Buffer(username + ':' + password).toString('base64')}`
      }
    }, options);

    return new Promise((resolve, reject) => {

      return request(opt, (error, response, body) => {

        if (error) {
          return reject({ error });
        } else if (response.statusCode !== 200) {
          return reject({ statusCode: response.statusCode });
        }

        return parseString(body, { trim: true, explicitArray: false }, (err, obj) => {
          if (err) {
            return reject({ error: err });
          }
          return resolve(obj);
        });

      });

    });

  };

};

export default function (username, password) {

  const functions = {};

  for (var i = 0 ; i < READY_TOPICS.length ; i++) {
    functions[READY_TOPICS[i]] = readyRequest(READY_TOPICS[i], username, password);
  }

  return functions;

}
