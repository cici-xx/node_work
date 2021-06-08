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

//删除
router.post('/delete',(req,res)=>{
  let advise=req.body.advise;
  var query="delete from tab_advise where advise='"+advise+"' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    arr=results;
     res.json({"data":1})
  })
})

module.exports = router;