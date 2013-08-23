var http = require("http");
var express = require('express');

// create a server
http.createServer(function(req, res) {
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);