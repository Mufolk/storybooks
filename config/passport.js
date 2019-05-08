const GoogleStrategy = require
    ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

module.exports = function(passport) {
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true // This is necessary so when deployed to heroku, it still works
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(profile);
        })
    )
}