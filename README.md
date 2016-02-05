Node-VisionLink
===============

Node.js wrapper for Caterpillar's VisionLink APIs.

## Installation

    npm install node-visionlink --save

## Usage

First of all, be sure to have access to the VisionLink API services. You'll need your API credentials when requiring this module.

    var wrapper=require('node-visionlink')('your_API_username','your_API_password');

You can either access *VisionLink-Ready* or *VisionLink* APIs.

    // VisionLink-Ready APIs
    wrapper.Ready.Assets(pageNumber, options, callback)

`pageNumber` (Number, *required*) is related to the APIs navigation.

    //VisionLink APIs
    wrapper.VisionLink.Diagnostic(queue_name, queue_position, options, callback)

`queue_name` (String, *optional*) is related to the data queue. Falls back to `testqueue`.

`queue_position` (Number, *required*) is related to the position in the data queue. Use zero (0) to retrieve data from the top of the queue.

`options` (Object, *optional*) parameter is the same you would use with [request](https://github.com/request/request). See examples folder for basic configuration with company proxy.

## APIs

All VL-Ready APIs are available :

* Assets (`Ready.Assets`)
* Asset Operation (`Ready.AssetOperation`)
* Asset Utilization (`Ready.AssetUtilization`)
* Fuel Utilization (`Ready.FuelUtilization`)
* LoadCounts (`Ready.LoadCounts`)

All VL APIs are available :

* Diagnostic Data (`VisionLink.Diagnostic`)
* Digital Switch Status (`VisionLink.DigitalSwitchStatus`)
* Engine Parameters (`VisionLink.EngineParameters`)
* Engine Start/Stop Time (`VisionLink.StartStop`)
* Event Data (`VisionLink.EventData`)
* Fleet Summary (`VisionLink.AEMP`)
* Fuel Information (`VisionLink.FuelInformation`)
* Geo fence Alert (`VisionLink.GeoFence`)
* SMU Location (`VisionLink.SMULocation`)

Refer to VisionLink documentation for additional information.

## Release History

* 0.3.0 VisionLink APIs added
* 0.2.0 Support for VisionLink-Ready APIs navigation
* 0.1.0 Initial release
