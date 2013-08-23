var math = require('./mathFunctions');

///
function getAddition(req, res) {
    var x = Number(req.query.x);
    var y = Number(req.query.y);
    var result = math.addition(x, y);
        
    writeResult(res, result);
}

///
function getSubtraction(req, res) {
    var x = Number(req.query.x);
    var y = Number(req.query.y);
    var result = math.subtraction(x, y);
        
    writeResult(res, result);
}

///
function getMultiplication(req, res) {
    var x = Number(req.query.x);
    var y = Number(req.query.y);
    var result = math.multiplication(x, y);
    
    writeResult(res, result);   
}

///
function writeResult(response, result) {
    response.writeHead(200, {'Content-Type':'application/json'});
    response.end('{ "result": ' + result + '}');
}

///
module.exports = {
  addition: getAddition,
  subtraction: getSubtraction,
  multiplication: getMultiplication
};