const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('/web/template/template.js');

module.exports ={
  main:function(request,response){
    var queryData = url.parse(request.url, true).query;
    var _url = request.url;
    if(_url == '/favicon.ico'){
      response.writeHead(200);
      response.end(fs.readFileSync("./favicon.ico"));
      return;
    }
    var result="";
    if(queryData.retry==1){
      result = template.result_html("",fs.readFileSync(__dirname+"/index.html")+"<div>존재하지 않는 로그인 정보 입니다</div>");
    }else {
      result = template.result_html("",fs.readFileSync(__dirname+"/index.html"));
    }
    response.writeHead(200);
    response.end(result);
  }
}
