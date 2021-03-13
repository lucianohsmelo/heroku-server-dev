const express = require('express');

const server = express();


server.get('/', (req, res) => {res.send('Ok')})

server.listen(process.env.port || 3000, () => {console.log('Server lisnten on port ', process.env.port || 3000)})