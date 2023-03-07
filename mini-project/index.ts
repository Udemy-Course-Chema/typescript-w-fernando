// const express = require('express');
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.json({
    //     status: true,
    //     msg: 'Todo salió bieeen!'

    // });
    res.status(401).json({
        ok:false,
        msg: 'No hay tokeeeeen!'
    });
});

app.listen( port, () => {
    console.log( 'App listening on port : ' + port );
})