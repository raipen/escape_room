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

    var select_query = `select * from room1_progress WHERE (user_id = '${queryData.id}');`
    connection.query(select_query,
      function(error,results,fields){
      //   var result = {
      //     success:false
      //   };
      //   if (error) {
      //     console.log("error");
      //     console.log(error);
      //   }else if(results.length!=0){
      //     result = results[0];
      //     result.seccess = true;
      //   }
      //   response.writeHead(200);
      //   response.end(JSON.stringify(result));
        if (error) {
          console.log("error");
          console.log(error);
        }
        if(results.length==0){
          results=[{}];
          results[0].success = false;
        }else{
          results[0].success = true;
        }
        response.writeHead(200);
        response.end(JSON.stringify(results[0]));
    });
    connection.end();
  }//main 함수 끝
}
