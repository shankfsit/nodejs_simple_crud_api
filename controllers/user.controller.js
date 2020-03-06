//const User = require('../model/user.model');
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const User = mongoose.model("User");

module.exports.allUsers = async (req, res, next)=>{
    User.find((err, result) =>{
        if(!err){
            res.send(result);
        }
        else{
            return next();
        }
    });
}

module.exports.userone = async (req, res, next)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found with id : ${req.params.id}`);
    }

    User.findById(req.params.id, (err, result) =>{
        if(!err){
            res.send(result);
        }
        else{
            return next();
        }
    });
}

module.exports.addUser = async (req, res, next) => {
    var user = new User();

    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, result) => {
        if(!err){
            res.send(result);
        }else{
            if(err == 11000){
                return res.status(422).send('Dupliccate email found');
            }
            else{
                return next();
            }
        }
    });
}

module.exports.editUser = async (req, res, next) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found with id : ${req.params.id}`);
    }

    var user = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true}, (err, result)=>{
            if(!err){
                res.send(result);
            }
            else{
                return next();
            }
    });
}

module.exports.deleteUser = async (req, res, next) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found with id : ${req.params.id}`);
    }

    User.findByIdAndRemove(req.params.id, (err, result)=>{
        if(!err){
            res.send(result);
        }
        else{
            console.log('Error in User delete: ' + JSON.stringify(err, undefined, 2));
        }
    });
}