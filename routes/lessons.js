var express=require('express');
var router = express.Router(); 
var mongojs=require('mongojs');
var cors = require('cors');
router.use(cors());

var db = mongojs('mongodb://mondia:mondia123@ds125211.mlab.com:25211/mondia', ['lessons']);
//get all atsks
router.get('/lessons', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.lessons.find(function(err, lessons){
        if(err){
            res.send(err)
        }res.json(lessons);
    });
});

//get single lessons
router.get('/lessons/:id', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.lessons.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, lessons){
        if(err){
            res.send(err)
        }res.json(lessons);
    });
});
//save a lessons
router.post('/lessons', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var lesson =req.body;
    if(!lesson.name ||!lesson.language ||!lesson.description || !(lesson.details + '')){
        res.status(400)
        res.json({"error": "Bad Data"});
    }else{
        db.lessons.save(lessons, function(err, lessons){
            if(err){
                res.send(err)
            }res.json(lessons);
        })
    }
   
});
//Delete single lessons
router.delete('/lessons/:id', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.lessons.remove({_id: mongojs.ObjectId(req.params.id)},function(err, lessons){
        if(err){
            res.send(err)
        }res.json(lessons);
    });
});

//update single lessons
router.put('/lessons/:id', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var lessons = req.body;
    var updlessons = {};
    if(lessons.isDone){
        updlessons.isDone=lessons.isDone;
    }
    if(lessons.title){
        updlessons.title=lessons.title;
    }
    if (!updlessons){
        res.status(400);
        res.json({"error" : "Bad Data"})
    }else{

        db.lessons.update({_id: mongojs.ObjectId(req.params.id)},updlessons,{},function(err, lessons){
            if(err){
                res.send(err)
            }res.json(lessons);
        });
    }

});






module.exports =router;