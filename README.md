Node-VisionLink
===============

Node.js wrapper for [Caterpillar's VisionLink APIs](https://APIDocumentation.myvisionlink.com).

:warning: **0.5.0 version brings some breaking changes. Please read carefully before updating!**

See `examples` folder for some basic examples. Please refer to VisionLink API documentation for additional information.

## Installation

    npm install node-visionlink --save

## Usage

First of all, be sure to have access to the VisionLink API services. You'll need your API credentials when requiring this module.

    const wrapper = require('node-visionlink')({
      username: 'your_API_username',
      password: 'your_API_password'
    });

`wrapper` allows you to access both *VL Ready* and *VisionLink* APIs.

#### VL Ready APIs

    wrapper.Ready.TOPIC({ page, options })
      .then(data => {
        // Do what you want with data
      })
      .catch(error => {
        // Handle error
      });

##### Available topics

* Assets (`Ready.Assets`)
* Asset Operation (`Ready.AssetOperation`)
* Asset Utilization (`Ready.AssetUtilization`)
* Fuel Utilization (`Ready.FuelUtilization`)
* LoadCounts (`Ready.LoadCounts`)

##### Param

Key | `typeof` value | Required | ?
--- | --- | --- | ---
`page` | Number | *false* | Relative to pagination of data (falls back to `1`)
`options` | Object | *false* | Same parameter you would use with [request](https://github.com/request/request)

---

#### VisionLink APIs

    wrapper.VisionLink.TOPIC({ queue_name, queue_position, options })
      .then(data => {
        // Do what you want with data
      })
      .catch(error => {
        // Handle error
      });

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

##### Param

Key | `typeof` value | Required | ?
--- | --- | --- | ---
`queue_name` | String | *false* | Relative to the data queue (falls back to `testqueue`)
`queue_position` | Number | *false* | Relative to the position in the data queue. Use zero (0) to retrieve data from the top of the queue (falls back to `0`)
`options` | Object | *false* | Same parameter you would use with [request](https://github.com/request/request)

## Release History

* **0.5.1** Fixed blank object issue
* **0.5.0**
  * Every function now uses an object as param :warning:
  * No more callback hell: functions now return promises :warning:
  * Fixed *legacy* URI
  * Updated VL topics to the latest versions
* **0.4.0** Module rewritten with ES6 syntax
* **0.3.0** VisionLink APIs added
* **0.2.0** Support for VisionLink-Ready APIs navigation
* **0.1.0** Initial release
