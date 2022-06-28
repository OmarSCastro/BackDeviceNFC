const express = require('express');
require('dotenv').config()
const app = express();



app.get('/api', (req, res) => {

    const smartcard = require('smartcard');

    const Devices = smartcard.Devices;
    const devices = new Devices(); //devices es un objeto de tipo Devices

    devtools();

    devices.on('device-activated', event => {
        const currentDevices = event.devices;
        let device = event.device;
        console.log(`Device '${device}' activated, devices: ${currentDevices}`);
        // console.log(`device.nombre ${divice.nombre}`)
        // res.json({ msg: 'Hola Javascript', obj: 'tarjeta' })



        device.on('card-inserted', event => {
            let card = event.card;
            console.log(`Card '${card.getAtr()}' inserted into '${event.device}'`);


        });
        device.on('card-removed', event => {
            console.log(`Card removed from '${event.name}' `);
        });

    });


    devices.on('device-deactivated', event => {
        console.log(`Device '${event.device}' deactivated, devices: [${event.devices}]`);
    });

    
})

app.listen(process.env.PORT, () => { console.log(`Conectado al servidor ${process.env.PORT} de RTP`) })