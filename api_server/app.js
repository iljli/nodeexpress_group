const express = require('express');
const app = express();
const path = require('path');
const travelRouter = require('./modules');

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    // res.send(`Welcome to your Recepies-Blog API`)
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'))
})

app.use('/api/articles', travelRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})