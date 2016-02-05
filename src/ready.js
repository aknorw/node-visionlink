'use strict';

var request = require('request');
var parseString = require('xml2js').parseString;

var Utils = require('./utils');
var Config = require('./config');

var baseUrl = 'https://api.myvisionlink.com/';
var pageUrl = '/page/';

function readyRequest(api,username,password) {
  return function(page,options,callback) {

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    var opt = {
      'url': baseUrl + api + pageUrl + page.toString(),
      'headers': {
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
      }
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

  for (var i = 0 ; i < Config.VLReadyTopics.length ; i++) {
    functions[Config.VLReadyTopics[i]] = readyRequest(Config.VLReadyTopics[i],username,password);
  }

  return functions;

}
