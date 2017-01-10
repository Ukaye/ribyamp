var LocalStrategy   = require('passport-local').Strategy;

var db = require('./database');
var user =  db.user;

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
    console.log(req.body);

       users.findOne({ 'Email' :  req.body.email }, function(err, user) {

           if (err)
               return done(err);


            if (user==null) {

              users.insert({
                Email: req.body.email,
             
              });




            var user=req.body;
            return done(null, user);

            } else {

              return done(null, false, req.flash('signupMessage', 'User already exist'));

            }

        });

    }));


    passport.use('local-login', new LocalStrategy({

      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {

      console.log(req.body)

user.findOne({ 'email' :  req.body.email }, function(err, user) {

            if (err)
                return done(err);

               if(!user)
                return done(null, false, req.flash('info', 'Oops! User dsnt exist.'));

        //    if (user.Email !== req.body.email)
          //      return done(null, false, req.flash('loginMessage', 'No user found.'));
            if (user.password !== req.body.password)
                return done(null, false, req.flash('info', 'Oops! Wrong password.'));
            return done(null, user);


        });
        }

    ));

}

