const express = require('express');
require('dotenv').config()
const app = express();



app.get('/api', (req, res) => {
    res.json({ devices:'Hola'})
})

app.listen(process.env.PORT, () => { console.log(`Conectado al servidor ${process.env.PORT} de RTP`) })