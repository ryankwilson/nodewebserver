var service = require('./serviceMappings');

// Setup the service mappings
service.map();

// Start-er-up
service.App().listen(process.env.PORT, process.env.IP);
console.log('Web Service listening at ' + process.env.IP + ':' + process.env.PORT);