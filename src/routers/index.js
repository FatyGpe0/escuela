const express = require('express');
const router = express.Router();
const model = require('../models/datos')();
const Cliente = require('../models/datos');

router.get('/', async (req, res)=>{
    const datos = await Cliente.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
}); //el get obtiene datos

module.exports = router;