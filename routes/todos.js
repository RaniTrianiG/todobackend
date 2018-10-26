var express = require('express');
var router = express.Router();

const Todoapp = require('../models/todos');

router.get('/', function(req, res, next){
    Todoapp.findAll()
        .then(function(result){
            res.send(result)
        });
});

router.get('/:id', function(req, res, next){
    var id = req.params.id
    Todoapp.findAll({
        where: {
            id: id,
        }
    }).then(function(result){
        res.send(result)
    });
});

router.post('/', function(req, res, next){
    const {name, age} = req.body;

    Todoapp.create(req.body)
        .then(function(result){
            res.send(result);
        });
});

router.put('/:id', function(req, res, next){
    var id = req.params.id
    Todoapp.update({
        name: req.body.name,
        age: req.body.age,
        updateAt : null,
        createdAt: null
    },{
        where: {
            id : id
            }
        }
    ).then(function(result){
        Todoapp.findAll()
        .then(function(result){
            res.send(result)
        })
    });
});

router.delete('/:id', function(req, res, next){
    var id = req.params.id;
    Todoapp.destroy({
        where: {
            id : id
        }
    }).then(function(result){
        Todoapp.findAll()
        .then(function(result){
            res.send(result)
        })
    })
})

module.exports = router;