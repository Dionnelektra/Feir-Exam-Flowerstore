var mysql = require('mysql2');

//DB Connection
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'******',
    database:'flowerstore', 
    timezone:'+08:00',
    multipleStatements: true
})

let query = function(sql,values){
    return new Promise((resolve,reject) => {
      pool.getConnection(function(err, connection){
        if( err){
          reject( err )
        }else{
          connection.query(sql, values, (err, rows) =>{
            if( err ){
              reject( err )
            }else{
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
  }
  module.exports = query; 