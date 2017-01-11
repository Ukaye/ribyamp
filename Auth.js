var LocalStrategy   = require('passport-local').Strategy;

var db = require('./database');
var User =  db.user;

module.exports = function(passport) {


    passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({

       usernameField : 'email',
       passwordField : 'password',
       passReqToCallback : true
   },
   function(req, email, password, done) {
       if (req.body && req.body.email){
           User.findOne({email:req.body.email}, function (err, user) {
               if (user){
                   return done(null, false, req.flash('signupMessage', 'User already exist'));
               }
               else {
                   var user = req.body;
                   user.password = user.role;
                   user.id = Math.round((Math.random() * 10000));
                   user.created_time = call.Date(new Date);
                   user.modified_time = call.Date(new Date);
                   User.insert(user);
                   return done(null, user);
               }
           });
       }
       else {
           return done(null, false, req.flash('signupMessage', 'Required parameters not sent'));
       }

    }));


    passport.use('local-login', new LocalStrategy({

      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({email:req.body.email}, function (err, user) {
            if (user){
                if (user.password !== req.body.password){
                    return done(null, false, req.flash('info', 'Oops! Wrong password'));
                }
                else {
                    return done(null, user);
                }
            }
            else {
                return done(null, false, req.flash('info', 'Oops! User does not exist'));
            }
        });
    }));
};

