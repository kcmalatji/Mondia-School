var express=require('express');
var router = express.Router(); 
var mongojs=require('mongojs');
var cors = require('cors');
router.use(cors());

var db = mongojs('mongodb://mondia:mondia123@ds125211.mlab.com:25211/mondia', ['Programming_language']);
//get all atsks
router.get('/Programming_language', function(req, res, next){
   
    db.Programming_language.find(function(err, Programming_language){
        if(err){
            res.send(err)
        }res.json(Programming_language);
    });
});

//get single Programming_language
router.get('/Programming_language/:id', function(req, res, next){

    db.Programming_language.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, Programming_language){
        if(err){
            res.send(err)
        }res.json(Programming_language);
    });
});
//save a Programming_language
router.post('/Programming_language', function(req, res, next){

    var Programming_language =req.body;
    if(!Programming_language.name || !Programming_language.title || !(Programming_language.introduction + '')){
        res.status(400)
        res.json({"error": "Bad Data"});
    }else{
        db.Programming_language.save(Programming_language, function(err, Programming_language){
            if(err){
                res.send(err)
            }res.json(Programming_language);
        })
    }
   
});
//Delete single Programming_language
router.delete('/Programming_language/:id', function(req, res, next){
   
    db.Programming_language.remove({_id: mongojs.ObjectId(req.params.id)},function(err, Programming_language){
        if(err){
            res.send(err)
        }res.json(Programming_language);
    });
});

//update single Programming_language
router.put('/Programming_language/:id', function(req, res, next){

    var Programming_language = req.body;
    var updProgramming_language = {};
    if(Programming_language.name){
        updProgramming_language.name=Programming_language.name;
    }
    if(Programming_language.title){
        updProgramming_language.title=Programming_language.title;
    }
    if(Programming_language.introduction){
        updProgramming_language.introduction=Programming_language.introduction;
    }
    if (!updProgramming_language){
        res.status(400);
        res.json({"error" : "Bad Data"})
    }else{

        db.Programming_language.update({_id: mongojs.ObjectId(req.params.id)},updProgramming_language,{},function(err, Programming_language){
            if(err){
                res.send(err)
            }res.json(Programming_language);
        });
    }

});






module.exports =router;