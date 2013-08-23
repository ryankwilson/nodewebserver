var express = require('express');
var app = express();
var svc = require('./serviceHandlers');

function map() {
    
    // Map public static files
    app.use(express.static(__dirname + '/public'));
    
    // GET : addition
    app.get('/addition', svc.addition);
    
    // GET : subtraction
    app.get('/subtraction', svc.subtraction);
    
    // POST : multiplication
    app.get('/multiplication', svc.multiplication);
    
    // Everything Else GET (404)
    app.use(function(req, res) {
       res.send(404, "Something went wrong... Oops"); 
    });
}

///
function getApp() { return app; }

///
module.exports = {
    map: map,
    App: getApp
};