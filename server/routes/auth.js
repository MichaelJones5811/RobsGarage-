const express = require('express');
const router = express.Router();
const User = require("../../models/userModel.js");
const passport = require("passport");

// process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/landingpage', // redirect to the secure profile section
        failureRedirect : '/usersignup', // redirect back to the signup page if there is an error
    }));

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/landingpage', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error

    }));

    //log out customer
    router.get("/logout", function(req, res) {
        req.logout();
        req.session.destroy(function(err) {
            res.redirect('/');

        });
    });

    //Get logged in user info
    router.get("/userinfo", function(req, res) {
      if(req.user) {
        res.json(req.user);
      } else {
        var errorMessage = {
          errorMessage: "No user logged in"
        };
        res.json(errorMessage);
      }
      });

      // This will get all users in db
      router.get("/allusers", function(req, res) {
        console.log("Got here");
        User.find().exec(function(error, users) {
          // Log any errors
          if (error) {
            console.log(error);
          }
          // Or send the users to the browser as a json object
          else {
            retObj = {};
            console.log("Length ", users.length);
            if (users.length === 0) {
              retObj = {
                successMsg: "yes"
              };
            } else {
              retObj = {
                failureMsg: "no"
              };
            }
          res.json(retObj);
          }
        });
      });

module.exports = router;
