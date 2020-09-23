const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

// Fetch Schema
const Users = require('../models/users');
const userRouter= express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/signin')

.get((req,res,next)=>{ // modification of res will be carried in here because of next
    //res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    Users.find({}) // perform find operation on db// it will return promise so handling in then
    .then((user)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user); // will take parameter and send it as json response
    },(err)=>next(err))
    .catch((err)=>next(err));

})
.post( (req,res,next)=>{  // modification of res will be carried in here because of next
    // res.statusCode=403;
    // res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    // constructing the reply message in this way we are confirming the details are receiving
    Users.create(req.body) // body parse already parse it 
    .then((user) => {
        console.log('User Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;
