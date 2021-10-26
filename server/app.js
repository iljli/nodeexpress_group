const express = require('express');
const app = express();
const travelRouter = require('./modules');

app.use(express.json());
app.get('/', (req, res) => {
    res.send(`Welcome to your Recepies-Blog API`)
})

app.use('/api/articles', travelRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})