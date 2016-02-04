'use strict';

var config = {
  username: process.env.VL_USERNAME || '',
  password: process.env.VL_PASSWORD || ''
}

var VisionLink=require('node-visionlink')(config.username,config.password);

// Get assets informations, without request options
VisionLink.Assets(function(err,data) {
  console.log(data);
})

// Get fuel utilization, with request options
VisionLink.FuelUtilization({
  'proxy': 'http://proxy.company.com:8080',
  'headers':{
    'Connection': 'keep-alive'
  }
}, function(err,data) {
  console.log(data);
})
