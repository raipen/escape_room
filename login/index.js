const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const mysql = require('mysql');
const properties = require('/web/properties.js');

const template = require('/web/template/template.js');

module.exports ={
  main:function(request,response){
    var queryData = url.parse(request.url, true).query;
    console.log(properties);
    var connection = mysql.createConnection({
      host     : properties.DBaddress,
      port     : properties.DBport,
      user     : properties.DBuser,
      password : properties.DBpassword,
      database : properties.DBdatabase
    });
    connection.connect();
    connection.query(`select * from user where id="${queryData.id}" and pw="${queryData.pw}";`,function(error,results,fields){
      if (error) {
        console.log("error");
        console.log(error);
      }
      if(results.length!=0){
        response.writeHead(302, {'Location': `/room1/?id=${queryData.id}`});
        response.end();
      }
      else{
        response.writeHead(302, {'Location': '/?retry=1'});
        response.end();
      }
    });
    connection.end();
  }
}
