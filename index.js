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
    if(_url.endsWith(".png")){
      response.writeHead(200);
      response.end(fs.readFileSync("/web"+_url));
      return;
    }
    var result="";
    if(queryData.retry==1){//아이디 비번 틀리면
      result = template.result_html(`<style>${fs.readFileSync(__dirname+"/login.css")}</style>)`,fs.readFileSync(__dirname+"/login.html")+"alert(존재하지 않는 로그인 정보 입니다)");
    }else {
      result = template.result_html(`<style>${fs.readFileSync(__dirname+"/login.css")}</style>`,fs.readFileSync(__dirname+"/login.html"));
    }
    response.writeHead(200);
    response.end(result);
  }
}
