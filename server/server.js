/**
 * Created by ikerib on 27/05/14.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');
var director = require('director');
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8000;
var router =    new director.http.Router();

var server = http.createServer(function(req, res){
    router.dispatch(req, res, function(err){
        if (err) {
            res.writeHead(404);
            res.end();
        }
    });
});

router.get('/', function(){
    this.res.writeHead(200, { 'Content-Type': 'text/html' });
    this.res.end('Producción server.');
});

router.get('/json', function(){

    var file = __dirname + '/data.json';
    var that = this;
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        data = JSON.parse(data);

        that.res.writeHead('Content-Type', 'application/javascript');
        that.res.end(JSON.stringify(data));

    });
});

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});
app.listen(3000);


server.listen(port);
console.log('app running on http://127.0.0.1:' + port);