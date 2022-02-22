var fs = require('fs');
module.exports = {
  result_html:function(head,body){
    console.log("template");
    return `<!doctype html>
    <html>
    <head>
      <title>방탈출 게임</title>
      <meta charset="utf-8">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      ${head}
    </head>
    <body>
      ${body}
    </body>
    </html>`;
  }
}
