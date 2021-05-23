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
    res.render('admin');
});
router.post('/admin',(req,res) => {
    let name = req.body.name;
    let pass1 = req.body.password;
    let pass =md5(pass1);
  let query='select name,password from admin_information where name ="'+name+'" and password ="'+pass+'" '
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