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
var user          = user,
var Aggregator    = Aggregator,
var Admin         = Admin,
var Association   = Association,
var Document      = Document,
var Member        = Member;



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

app.get('/Admin', function(req, res){
	
res.render('Admin');
	
});


app.get('/Login', function(req, res){
    
res.render('Login',{info: req.flash('info')});
    
});



app.post('/Add', function(req, res){



});









app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/Admin',
  failureRedirect : '/login',
  failureFlash : true
}));


 app.post('/signup', passport.authenticate('local-signup', {
   successRedirect : '/Admin',
   failureRedirect : '/login',
   failureFlash : true
 }));


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


}
