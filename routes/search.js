let express = require('express');
let router = express.Router();
let mysql =require('mysql');


let connection =mysql.createConnection( {
    host:"localhost",
    user:"root",
    password:"root",
    database:"book"
})

router.get('/',(req,res)=>{
    res.render('search');
});
router.post('/search',(req,res) => {
    let bname = req.body.bname;
    let bwirter = req.body.bwirter;
  let query='select bname,bwriter from tab_book where bname ="'+bname+'" and bwriter ="'+bwirter+'" '
  connection.query(query,(err,results,fields) =>{
      var cc =results[0];
      if(!cc){
        res.json({"status":-1});
      }else{
          res.json({"status":1});
      }
  })  
    
})

module.exports = router;