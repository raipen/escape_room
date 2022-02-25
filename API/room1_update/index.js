const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const mysql = require('mysql');
const properties = require('/web/properties.js');

module.exports ={
  main:function(request,response){
    var queryData = url.parse(request.url, true).query;
    var connection = mysql.createConnection({
      host     : properties.DBaddress,
      port     : properties.DBport,
      user     : properties.DBuser,
      password : properties.DBpassword,
      database : properties.DBdatabase
    });

    connection.connect();

    var update_query = `UPDATE room1_progress SET light = '${queryData.light}' WHERE (user_id = '${queryData.id}');`
    connection.query(update_query,
      function(error,results,fields){
        var result = {success:false};
        if (error) {
          console.log("error");
          console.log(error);
        }
        else{
          result = {success:true};
        }
        response.writeHead(200);
        response.end(JSON.stringify(result));
    });
    connection.end();
  }//main 함수 끝
}
