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
  res.render('bookmanagement');
});

//新增
router.post('/',(req,res) =>{
    let bid=req.body.bid;
    let bname=req.body.bname;
    let bwriter=req.body.bwriter;
    let bstock=req.body.bstock;
    let bimg= req.body.bimg;
    var query = 'insert tab_book(bid,bname,bwriter,bstock,bimg) values("'+bid+'","'+bname+'","'+bwriter+'","'+bstock+'","'+bimg+'")'
    connection.query(query, (err,results,fields)=> {
      if(err){
        console.log(err);
        return;
      }
      arr=results;
         res.json({"data":1})
    })
  })

//数据库取值
    router.get('/bookmanagement',(req,res) =>{
      var query = "select bid,bname,bwriter,bstock,bimg from tab_book ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
        res.json(results);
      })
  })

//删除
    router.post('/del',(req,res)=>{
      let bname=req.body.name;
      var query="delete from tab_book where bname='"+bname+"' ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
        arr=results;
         res.json({"data":1})
      })
    })
    
//修改
   var arr=new Array();
    router.post('/update',(req,res) =>{
      let bname=req.body.name;
      var query="select * from tab_book where bname='"+bname+"' ";
      connection.query(query,(err,results,fields) =>{
        if(err){
          console.log(err);
          return;
        }
         arr=results;
         res.json({"data":1})
     })
  })

//修改页面模板字符串
    router.get('/alter1',(req,res) =>{
      res.json({"data":arr});
  })

//修改页面按钮
router.get("/alter",function(req,res){
    res.render("alter")
})


    router.post('/alter',(req,res)=>{
      let bid1=req.body.bid1;
      let bname1=req.body.bname1;
      let bwriter1=req.body.bwriter1;
      let bstock1=req.body.bstock1;
      let bimg1=req.body.bimg1;
      var query="update tab_book set bid='"+bid1+"',bname='"+bname1+"',bwriter='"+bwriter1+"',bstock='"+bstock1+"',bimg='"+bimg1+"' where bname='"+arr[0].bname+"'  ";
      connection.query(query,(err,results,fields) =>{
        if(err){
         console.log(err);
         return;
       }
       arr=results;
       res.json({"data":1})
   })
 })
 //搜索

 router.post('/bsearch',(req,res)=>{
  let data =req.body.data;
  console.log(data);
  var query="select bid,bname,bwriter,bstock,bimg from tab_book where bname like '%"+data+"%' or bwriter like '%"+data+"%'  or bimg like '%"+data+"%' "
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json(results);
  })
 })

module.exports = router;

