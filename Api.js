var cors          = require('cors');
var express       = require('express');
var app           = express();
var multer        = require('multer');
var nodemailer    = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var hbs           = require('nodemailer-express-handlebars');
var passport      = require('passport');
var request       = require('request');
var db            = require('./database');
var call            = require('./call');

// ==============         Db importation ========   //

var Agent         = db.Agent;
var User          = db.user;
var Aggregator    = db.Aggregator;
var Admin         = db.Admin;
var Association   = db.Association;
var Document      = db.Document;
var Member        = db.Member;



module.exports = function(app,passport){
    
app.post('/signup', function (req, res) {
    if (req.body && req.body.email){
        User.findOne({email:req.body.email}, function (err, user) {
            if (user){
                res.status(400).json({status:2, message:"User already exists"});
            }
            else {
                var user = req.body;
                user.password = user.role;
                user.id = Math.round((Math.random() * 10000));
                user.created_time = call.Date(new Date);
                user.modified_time = call.Date(new Date);
                User.insert(user);
                res.status(200).json({status:1, data:user, message:"User created successfully"});
            }
        });
    }
    else {
        res.status(400).json({status:2, message:"Required parameters not sent"});
    }
});
    

app.post('/login', function (req, res) {
    User.findOne({email:req.body.email}, function (err, user) {
        if (user){
            res.status(200).json({status:1, data:user, message:"Log in successful"});
        }
        else {
            res.status(400).json({status:2, message:"User does no exist"});
        }
    });
});


app.post('/Add', function(req, res){

  data =  req.body;

   if(data.access == 1){
    
        member = {  

         user_id: Math.round((Math.random() * 10000)),
            association_id: data.ID,
                 FirstName: data.FirstName,
                 LastName : data.LastName,
                 access   : 1,  
                created_by: req.user.user_id

              }

              Member.insert(member);

   }else if(data.access == 2){

     member = {  

         user_id: Math.round((Math.random() * 10000)),
            association_id: data.ID,
                 FirstName: data.FirstName,
                 LastName : data.LastName,
                 access   : 2,  
                created_by: req.user.user_id

              }

              Member.insert(member);


   }else if(data.access == 3){

     member = {  

         user_id: Math.round((Math.random() * 10000)),
            association_id: data.ID,
                 FirstName: data.FirstName,
                 LastName : data.LastName,
                 access   : 3,  
                created_by: req.user.user_id

              }

     user         

              Member.insert(member);
   }

});

}
