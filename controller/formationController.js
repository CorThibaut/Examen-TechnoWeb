let Formation = require('../models/formationModels');
let connection = require('../db.js');

let JAVA = new Formation('JAVA', '200','06-12-2022', '07-12-2021');
let Csharp = new Formation('C#','100','07-12-2022','08-12-2021');

//formList = [JAVA, Csharp];
inscri = [];
formList = [];

exports.formList = function(req,res){
    connection.query("select * from academy;",function(error,result){
        if (error) console(error);
        res.render('home.ejs', {tNames: result});
        
        let formList = [];
        for(let i=0; i<result.length ; i++){ 
            formList.push(result[i]);
            console.log(result[i]);
        };
    });
    //res.render('home.ejs',{tNames : formList});
}

exports.formInscri = function(req,res){
    let i = req.params.i;
    
    
    
    
    inscri.push(formList[i]);
    formList.splice(i,1);
    res.redirect('/home');
}

exports.formPanier = function(req,res){
    connection.query("select * from inscri;",function(error,result){
        if (error) console(error);
        res.render('panier.ejs', {tNames: result});
        
        let inscri = [];
        for(let i=0; i<result.length ; i++){ 
            inscri.push(result[i]);
        };
    });
    
    //res.render('panier.ejs', {tNames: inscri});
}

exports.formDInscri = function(req,res){
    let i = req.params.i;
    formList.push(inscri[i]);
    inscri.splice(i,1);
    res.redirect('/panier');
}