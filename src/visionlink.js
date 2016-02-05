'use strict';

var request = require('request');
var parseString = require('xml2js').parseString;

var Utils = require('./utils');
var Config = require('./config');

var baseUrl = 'https://www.myvisionlink.com/APIService/';

function VLRequest(api,username,password) {
  return function(queue_name,queue_position,options,callback) {

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

    var opt = {
      'url': baseUrl + api.context + '/v' + api.version.toString() + '/' + api.service,
      'headers': {
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
      }
    }

    if (api.topic) {
      opt.url += '/' + queue_name + '/' + api.topic + '/' + queue_position;
    }

    if (typeof options === 'object') {
      Utils.mergeObjects(opt,options);
    }

    request(opt, function(error,response,body) {
      if (!error && response.statusCode == 200) {
        parseString(body, {trim:true,explicitArray:false}, function(err,obj) {
          callback(null,obj);
        })
      }
    })

  }
}

module.exports = function(username,password) {

  var functions = {};

  for (var i = 0 ; i < Config.VLTopics.length ; i++) {
    functions[Config.VLTopics[i].name] = VLRequest(Config.VLTopics[i],username,password);
  }

  return functions;

}
