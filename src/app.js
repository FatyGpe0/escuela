const express = require('express'); // referencia a framework express
const app = express();  //se crea la aplicacion de express
const log = require('morgan'); // para saber los clientes conectados
const bodyParse = require('body-parser');
const path = require('path');

const IndexRoutes = require('./routers/index.js');
const { default: mongoose } = require('mongoose');

app.set('port', process.env.PORT || 3000); // asignacion de puerto
//app.set('view engine', 'ejs');


//MiddleWare utiliza morgan
app.use(log('dev'));
app.use(bodyParse.urlencoded({extended: false}));
//Rutas
app.use('/',IndexRoutes);


app.listen(app.get('port'), () => {
    console.log('El servidor esta funcionando en el puerto ', app.get('port'));
} 
);

//conectar a BD
mongoose.connect("mongodb+srv://faty:Sx09AnoKdsJewkAY@cluster0.q3on5sh.mongodb.net/Restaurante?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectada'))
.catch(err=>console.log(err));

// establecer sistema de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// desplegar mensaje de conectar