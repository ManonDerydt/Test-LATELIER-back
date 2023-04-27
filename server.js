const express = require('express');
const app = express();

console.log("test")
app.use(express.static('dist'));


