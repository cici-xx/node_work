let express = require('express');
let router = express.Router();
let User = require('./bean/user');
let mysql = require('mysql');
let md5 =require('md5');

let connection =mysql.createConnection( {
    host:"localhost",
    user:"root",
    password:"root",
    database:"book"
})

router.get('/',(req,res)=>{
    res.render('admin_');
});

router.post('/',(req,res) =>{
    //获取前端传递的参数
    //放入对象
    let name =req.body.username;
    let pass1 = req.body.pass;
    let pass = md5(pass1);
    let user = new User(name,pass);
    // console.log(user);
    let query= 'insert admin_information (name,password) values("'+user.username+'","'+user.pass+'")'
connection.query(query,(err,results,fieids) =>{
    if(err){
        console.log(err);
        return;
    }else{
        res.redirect("/admin")
    }
    
})
    // //存入session
    req.session.user = user;
    
})


module.exports = router;

