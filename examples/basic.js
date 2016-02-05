'use strict';

var config = {
  username: process.env.VL_USERNAME || '',
  password: process.env.VL_PASSWORD || ''
}

var wrapper = require('node-visionlink')(config.username,config.password);

// VisionLink-Ready APIs

// Get page 1 of assets informations, without request options
wrapper.Ready.Assets(1, function(err,data) {
  console.log(data);
})

// Get page 2 of fuel utilization, with request proxy option
wrapper.Ready.FuelUtilization(2, {
  'proxy': 'http://proxy.company.com:8080'
}, function(err,data) {
  console.log(data);
})

// VisionLink APIs

// Retrieve all the data of 'testqueue' about fuel information, without request options
wrapper.VisionLink.FuelInformation(0, function(err,data) {
  console.log(data);
})

// Retrieve data from beyond position 1337 of 'myQueue' about events, with request proxy option
wrapper.VisionLink.EventData('myQueue', 1337, {
  'proxy': 'http://proxy.company.com:8080'
}, function(err,data) {
  console.log(data);
})
