const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
 
// load up the user model
const User = require('../models/usuario');
const config = require('../config/app'); // get db config file
 
module.exports = function(passport) {
    let opts = {};
    opts.secretOrKey = config.secret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload._id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
  }));
  return {
      authenticate : () => {
          return passport.authenticate('jwt', { session: false })
      }
  }
};
