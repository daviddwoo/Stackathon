// const express = require('express');
import express from 'express'
import path from 'path'
const app = express();

app.get('/', (req, res)=> res.sendFile('index.html'));

const init = async() => {
    try {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    }
    catch(ex) {
        console.log(ex);
    }
}

init();