let User = require('../models/userModels');

let destinationController = require('./userController.js');

let passenger = [];

exports.userList = function(req,res){
    res.render('person.ejs');
}

exports.userPost = function(req,res){
    let perso = new User(req.body.name,req.body.age);
    passenger.push(perso)
    res.redirect('/validation');
}
