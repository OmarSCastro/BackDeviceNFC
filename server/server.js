const express = require('express');
require('dotenv').config()
const app = express();

app.get('/api', (req,res) => {
    res.json({msg:'Hola Javascript',obj:'tarjeta'})
})

app.listen(process.env.PORT, () => {console.log(`Conectado al servidor ${process.env.PORT} de RTP`)})