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




}
