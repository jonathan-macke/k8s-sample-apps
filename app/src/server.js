'use strict';

const express = require('express');
const cluster = process.env.CLUSTER;

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello world. \n Welcome on cluster ${cluster}`);
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);