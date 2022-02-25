const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('/web/template/template.js');

module.exports = {
  main:function(request,response){
    var queryData = url.parse(request.url, true).query;
    var _url = request.url;
    if(_url.endsWith(".css")){
      response.writeHead(200);
      response.end(fs.readFileSync("/web"+_url));
      return;
    }
    response.writeHead(200);
    var header = `<script type="text/javascript">
    const user_id = "${queryData.id}";
    ${fs.readFileSync(__dirname+"/room1.js")}
    </script>
    <style>${fs.readFileSync(__dirname+"/room1.css")}</style>`;
    //response.end(template.result_html(header,fs.readFileSync(__dirname+"/index.html")));
    response.end(fs.readFileSync(__dirname+"/index.html"));
  }
}
