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



var options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: 'view/email/',
        defaultLayout : 'main',
        partialsDir : 'view'
    },
    viewPath: 'view',
    extName: '.hbs'
};



module.exports = function(app,passport){

app.get('/', function(req, res){
    res.render('Login',{info: req.flash('info')});
});

app.get('/boi', function(req, res){
    res.render('boi');
});

app.get('/pmo', function(req, res){
    res.render('pm');
});

app.get('/amo', function(req, res){
    res.render('amo');
});

app.get('/lead_aggregator', function(req, res){
    res.render('lead_aggregator');
});

app.get('/aggregator', function(req, res){
    res.render('aggregator');
});

app.get('/agent', function(req, res){
    res.render('agent');
});



app.get('/success', function(req, res){
    switch (parseInt(req.user.access)) {
    
        case 1:
            res.redirect('/boi');
            break;
        case 2:
              res.redirect('/pmo');
            break;
        case 3:
             res.redirect('/amo');
              break;
        case 4:
            res.redirect('/lead_aggregator');
             break;
        case 5:
            res.redirect('/aggregator');
              break;
         case 6:
            res.redirect('/agent');
              break;
      
       
        }
    
});


app.get('/loggedInUser', function (req, res) {
    user.findOne({email: req.user.email}, function (err,user) {
        if (err){
            res.status(400).json({status:2, message: "User does not exist!"});
        }
        if (user){
            res.status(200).json({status:1, data:user});
        }
    })
});


app.get('/update', function(req, res){

  user.insert({
    id: Math.round((Math.random() * 10000)),
    firstname: 'Prince',
    lastname: 'Isaac',
    email: 'prince@gmail.com',
    phone: 09050484751, 
    password: 'Des',
    access  : 1,
    created_time: Date().now,
    modified_time:Date().now
    });

  res.send('done');

});





app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/success',
  failureRedirect : '/',
  failureFlash : true
}));


 app.post('/signup', passport.authenticate('local-signup', {
   successRedirect : '/login',
   failureRedirect : '/signup',
   failureFlash : true
 }));



app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


}
