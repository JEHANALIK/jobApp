//require the 2 packages
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const User = require('../models/User')
//saving id in the session
passport.serializeUser(function(user, done){
    done(null , user.id)
})

passport.deserializeUser(function(id , done) {
    User.findById(id , function(err, user) {
        done(err, user)
    })
})


passport.use(new localStrategy ({
    usernameField: 'emailAddress',
    passwordField: 'password'
},
    function (emailAddress, password , done) {
        User.findOne({ emailAddress: emailAddress} , function(err , user) {
            if (err) { return done(err) }
            if (!user) { return done(null , false)}
            if (!user.verifyPassword(password)) { return done(null, false) }
            return done(null , user)
        })
    }
))

module.exports = passport
