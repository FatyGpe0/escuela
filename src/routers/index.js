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


router.post('/add', async (req, res)=>{
    const valor = new Cliente(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});


router.get('/del/:id', async (req, res)=>{   //Eliminar
    const {id}=req.params;
    await Cliente.findByIdAndRemove(id);   //Actualizar
    res.redirect('/');
})

router.get('/upd/:id', async (req, res)=>{
    const {id}=req.params;
    await Cliente.findByIdAndUpdate(id);
    res.redirect('/');
})

module.exports = router;

//al presional el boton de eliminar se abra una ventana modal para que se confirme la eliminación
//<a href="/del/_id"
// el link que va a ejectar la aplicacion debe ir en el modal en la opcion de confirmar

//TAREA
//agregar boton de actualizar al lado de eliminar y de registrar, para que una ves que se presione al lado de
//eliminar se pongan los elementos del registro seleccionado en los campos de arriba, los edito y al darle al boton 
//de actualizar al lado de registrar se actualicen los valores en la tabla.... Expresss
