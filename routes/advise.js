var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let connection =mysql.createConnection( {
    host:"localhost",
    user:"root",
    password:"root",
    database:"book"
})

router.get('/', function(req, res, next) {
  res.render('advise');
});

//数据库取值
router.post('/content',(req,res) =>{
    var query = "select * from tab_advise ";
    connection.query(query,(err,results,fields)=>{
      if(err){
        console.log(err);
        return;
      }
      res.json(results);
    })
})

module.exports = router;