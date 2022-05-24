// inyeccion de express, instancia del router
let express = require('express');
let router = express.Router();
var info = require('../models/person');

// ruta persons, direcciona a una tabla con la informacion de las personas registradas en la bd
router.get('/persons', function(req,res,next) {
    info.find(function(err, persons){
        if (err) return next(err);
        res.render('table',{persons});
    });
});

router.get('/index', (req, res) => {
    res.render('index.ejs')
});

router.get('/person', (req, res) => {
    res.render('person');
})
router.post('/person', async (req, res) => {
    let personInfo = new info({
        firstName: req.body.fname,
        lastName: req.body.lname,
        age: req.body.age,
        socialServiceNumber: req.body.socialNumber,
        bloodType: req.body.bloodType})
    await personInfo.save()
    res.send(`Registrado: ${personInfo.firstName} ${personInfo.lastName} de ${personInfo.age} años`)
});

module.exports= router;