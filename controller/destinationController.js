let Destination = require('../models/destinationModels');
let connection = require('../db.js');
let userController = require('./userController.js')


let dest="";

exports.reservation = function(req,res){
    dest = "";
    res.render('home.ejs');
}

exports.destinationOrder = function(req,res){
    let reservation = new Destination(req.body.destination,req.body.nbseat,req.body.assurance);
    dest = reservation;
    console.log(dest);
    res.redirect('/person');
}

exports.Confirmation = function(req,res){
    dest = "";
    res.render('Confirmation.ejs');
}

exports.Validation = function(req,res){
    res.render('validation.ejs', {});
}
