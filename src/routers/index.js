const express = require('express');
const router = express.Router();
const model = requiere('../models/clientes.js')();
const Cliente = requiere('../model/clientes.js');

router.get('/', async (req, res)=>{
    const datos = await Cliente.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
}); //el get obtiene datos

module.exports = router;