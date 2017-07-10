import request from 'request';
import { parseString } from 'xml2js';

import { VL_TOPICS } from './topics';

const VLRequest = (api, username, password) => {

  return ({ queue_name = 'testqueue', queue_position = 0, options = {} }) => {

    const opt = Object.assign({}, {
      url: `https://legacy.myvisionlink.com/APIService/${api.context}/v${api.version.toString()}/${api.service}`,
      headers: {
        Authorization: `Basic ${new Buffer(username + ':' + password).toString('base64')}`
      }
    }, options);

    if (api.topic) {
      opt.url += `/${queue_name}/${api.topic}/${queue_position}`;
    }

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

  for (var i = 0 ; i < VL_TOPICS.length ; i++) {
    functions[VL_TOPICS[i].name] = VLRequest(VL_TOPICS[i], username, password);
  }

  return functions;

}
