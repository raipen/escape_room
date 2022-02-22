const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('I:/학교/2022/방탈출/escape_room/template/template.js');

module.exports = {
  main:function(request,response){
    var queryData = url.parse(request.url, true).query;
    response.writeHead(200);
    var header = `<script type="text/javascript">
    const user_id = "${queryData.id}";
    ${fs.readFileSync(__dirname+"/room1.js")}
    </script>
    <style>${fs.readFileSync(__dirname+"/room1.css")}</style>`;
    response.end(template.result_html(header,fs.readFileSync(__dirname+"/index.html")));
  }
}
