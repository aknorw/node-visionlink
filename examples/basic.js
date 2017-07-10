const account = {
  username: process.env.VL_USERNAME,
  password: process.env.VL_PASSWORD
};

const wrapper = require('node-visionlink')(account);

// VisionLink-Ready APIs

// Get page 1 of assets informations, without request options
wrapper.Ready.Assets()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// Get page 2 of fuel utilization, with request proxy option
wrapper.Ready.FuelUtilization({ page: 2, options: { proxy: 'http://proxy.company.com:8080' } })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// VisionLink APIs

// Retrieve all the data of 'testqueue' about fuel information, without request options
wrapper.VisionLink.FuelInformation()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// Retrieve data from beyond position 1337 of 'myQueue' about events, with request proxy option
wrapper.VisionLink.EventData({ queue_name: 'myQueue', queue_position: 1337, options: { proxy: 'http://proxy.company.com:8080' } })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
