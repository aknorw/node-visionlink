Node-VisionLink
===============

Node.js wrapper for Caterpillar's VisionLink APIs.

## Installation

    npm install node-visionlink --save

## Usage

First of all, be sure to have access to the VisionLink API services. You'll need your API credentials when requiring this module.

    var VisionLink=require('node-visionlink')('your_API_username','your_API_password');

    VisionLink.Assets(pageNumber, options, function(err,data) {
      console.log(data);
    });

`pageNumber` *(Number, required)* is related to the APIs navigation.

`options` *(Object, optional)* parameter is the same you would use with [request](https://github.com/request/request). See examples folder for basic configuration.

## APIs

All VL-Ready APIs are available :

* Assets (`VisionLink.Assets`)
* Asset Operation (`VisionLink.AssetOperation`)
* Asset Utilization (`VisionLink.AssetUtilization`)
* Fuel Utilization (`VisionLink.FuelUtilization`)
* LoadCounts (`VisionLink.LoadCounts`)

Refer to VisionLink documentation for additional information.

## Release History

* 0.2.0 Support for APIs navigation
* 0.1.0 Initial release
