Node-VisionLink
===============

Node.js wrapper for Caterpillar's VisionLink APIs.

See `examples` folder for some basic examples. Please refer to VisionLink API documentation for additional information.

## Installation

    npm install node-visionlink --save

## Usage

First of all, be sure to have access to the VisionLink API services. You'll need your API credentials when requiring this module.

    var wrapper = require('node-visionlink')('your_API_username', 'your_API_password');

`wrapper` allows you to access both *VL Ready* and *VisionLink* APIs.

---

#### VL Ready APIs

    wrapper.Ready.TOPIC(pageNumber, options, callback)

##### Available topics

* Assets (`Ready.Assets`)
* Asset Operation (`Ready.AssetOperation`)
* Asset Utilization (`Ready.AssetUtilization`)
* Fuel Utilization (`Ready.FuelUtilization`)
* LoadCounts (`Ready.LoadCounts`)

##### Params

Param name | Type | Required | ?
--- | --- | --- | ---
`pageNumber` | Number | *true* | Relative to pagination of data
`options` | Object | *false* | Same parameter you would use with [request](https://github.com/request/request)
`callback` | Function | *true* | Your callback function

---

#### VisionLink APIs

    wrapper.VisionLink.TOPIC(queue_name, queue_position, options, callback)

##### Available topics

* Diagnostic Data (`VisionLink.Diagnostic`)
* Digital Switch Status (`VisionLink.DigitalSwitchStatus`)
* Engine Parameters (`VisionLink.EngineParameters`)
* Engine Start/Stop Time (`VisionLink.StartStop`)
* Event Data (`VisionLink.EventData`)
* Fleet Summary (`VisionLink.AEMP`)
* Fuel Information (`VisionLink.FuelInformation`)
* Geo fence Alert (`VisionLink.GeoFence`)
* SMU Location (`VisionLink.SMULocation`)

##### Params

Param name | Type | Required | ?
--- | --- | --- | ---
`queue_name` | String | *false* | Relative to the data queue (falls back to `testqueue`)
`queue_position` | Number | *true* | Relative to the position in the data queue. Use zero (0) to retrieve data from the top of the queue
`options` | Object | *false* | Same parameter you would use with [request](https://github.com/request/request)
`callback` | Function | *true* | Your callback function

## Release History

* **0.4.0** Module rewritten with ES6 syntax
* **0.3.0** VisionLink APIs added
* **0.2.0** Support for VisionLink-Ready APIs navigation
* **0.1.0** Initial release
