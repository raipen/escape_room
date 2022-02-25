var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

console.log("log");

var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    pathname = pathname.substr(0,pathname.lastIndexOf('/')+1);
    if(_url.endsWith(".css")||_url.endsWith(".png")){
      response.writeHead(200);
      response.end(fs.readFileSync("/web"+_url));
      return;
    }
    fs.exists("."+pathname+"index.js",function(exists){
      console.log(exists);
      if(exists){
        var main_module = require("."+pathname+"index.js");
        main_module.main(request,response);
      }else{
        response.writeHead(404);

        response.end('404 Not found');
      }
    });
});

app.listen(8080);
