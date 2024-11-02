const http = require('http');
const host = require('localhost');
const port = 3000;
const requestListener = function (req, res, next) {
    console.log('requestListener');
    res.setHeader('Content-Type', 'application/json');

}