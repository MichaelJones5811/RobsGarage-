const express = require('express');
const router = express.Router();

const service = require("../../models/serviceModel.js");


router.post('/addservice', function(req, res) {
    console.log('Posting an New Service');
    console.log(req.body);
    var newService = new service(req.body);
   
    
    newService.save(function(err, service) {

        if(err) {
            console.log('Error inserting the new service');
        } else {
            res.json(service);
        }
    });
});


module.exports = router;