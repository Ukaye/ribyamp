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

// ==============         Db importation ========   //

var Agent         = db.Agent;
var user          = db.user;
var Aggregator    = db.Aggregator;
var Admin         = db.Admin;
var Association   = db.Association;
var Document      = db.Document;
var Member        = db.Member;



module.exports = function(app,passport){


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
