var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let connection =mysql.createConnection( {
    host:"localhost",
    user:"root",
    password:"root",
    database:"book"
})

router.get('/', function(req, res) {
  res.render('mybookrack');
});

module.exports = router;