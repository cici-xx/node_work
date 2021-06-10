let express = require('express');
let router = express.Router();
let mysql =require('mysql');
let md5 =require('md5');

let connection =mysql.createConnection( {
    host:"localhost",
    user:"root",
    password:"root",
    database:"book"
})

router.get('/',(req,res)=>{
    res.render('content');
});
router.post('/login',(req,res) => {
    let name = req.body.username;
    let pass = req.body.pass;
    if( req.session.user!= undefined && name == req.session.user.username && pass == req.session.user.pass ){
            res.send("login success")
        }else{
            res.end("login fail")
        } 
})

router.get("/show",(req,res)=>{
    var sql = 'select * from tab_book';
    connection.query(sql,function(err,rows){
        res.json(rows)
    })

})

//意见
router.post('/content',(req,res) =>{
    let advise=req.body.advise;
    var query = 'insert tab_advise(advise) values("'+advise+'")'
    connection.query(query, (err,results,fields)=> {
      if(err){
        console.log(err);
        return;
      }
      res.json(results);
    })
  })

  router.post('/',(req,res)=>{

      let bimg=req.body.bimg;
      let bname=req.body.bname;
      console.log(bname);
      var query = 'insert tab_userbook(bname,bimg) values("'+bname+'","'+bimg+'")'
      connection.query(query, (err,results,fields)=> {
        if(err){
          console.log(err);
          return;
        }
        res.json({"status":1});
      })
  })

  router.get('/mybookrack',(req,res)=>{
      var query = 'select bimg,bname from tab_userbook'
      connection.query(query, (err,results,fields)=> {
        if(err){
          console.log(err);
          return;
        }
        res.json(results);
    })
  })

  

module.exports = router;