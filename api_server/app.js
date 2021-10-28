/*
Installed packages:

- npm install express
- npm install pg 
- npm install dotenv
- npm install express-validator

*/

const express = require('express');
const app = express();
require("dotenv").config();                 // for .env file
const travelRouter = require('./database/modules');
const cors = require('cors');

app.use(express.json());
app.use(cors()); // allows to enable cors


// const path = require('path');
// app.use(express.static(path.join(__dirname,'public')));
// app.get('/', (req, res) => {
//     // res.send(`Welcome to your Recepies-Blog API`)
//     res.sendFile(path.join(__dirname, 'HTML', 'index.html'))
// })


app.use('/api/articles', travelRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})