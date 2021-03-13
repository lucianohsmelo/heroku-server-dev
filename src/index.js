const express = require('express');

const port = process.env.PORT || 3000;

const server = express();


server.get('/', (req, res) => {res.send('Test Heroku')})

server.listen(port, () => {console.log('Server lisnten on port ', port)})