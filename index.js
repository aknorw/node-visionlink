'use strict';

var request=require('request');
var parseString=require('xml2js').parseString;

var baseUrl='https://api.myvisionlink.com/';
var pageUrl='/page/';

function mergeObjects(obj1,obj2) {
  for (var key in obj2) {
    try {
      if (typeof obj2[key] === 'object') {
        obj1[key] = mergeObjects(obj1[key],obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    } catch (e) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

function basicRequest(api,username,password) {
  return function(page,options,callback) {

    if (typeof options === 'function') {
      options = {};
      callback = options;
    }

    var opt = {
      'url':baseUrl+api+pageUrl+page.toString(),
      'headers':{
        'Authorization':'Basic '+new Buffer(username+':'+password).toString('base64')
      }
    }

    if (typeof options === 'object') {
      mergeObjects(opt,options);
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

  return {
    Assets: basicRequest('Assets',username,password),
    AssetOperation: basicRequest('AssetOperation',username,password),
    AssetUtilization: basicRequest('AssetUtilization',username,password),
    FuelUtilization: basicRequest('FuelUtilization',username,password),
    LoadCounts: basicRequest('LoadCounts',username,password)
  }

}
