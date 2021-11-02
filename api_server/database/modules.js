const express = require('express');
myRouter = express.Router();
const db = require("./client");


myRouter.get("/time", (req, res) => {
    db.query("SELECT NOW()")
        .then((dbData) => res.send(dbData.rows[0]))
        .catch((err) => res.sendStatus(500));
})

//  ?sort=true -> sort titles
myRouter.get('/', (req, res) => {
    const isSort = req.query.sort;
    db.query('SELECT * FROM recepies;')
        .then((dbData) => {
            if (isSort === "true") {
                const sortedArray = [...dbData.rows].sort((a, b) => (a.title > b.title) ? 1 : -1);
                res.json(sortedArray);
            } else {
                res.json(dbData.rows);
            }
        })
        .catch((err) => res.sendStatus(500));
})


// myRouter.post('/picture', (req, res) => {
//     const { filename_original, filaname_save, file_url} = req.body;
//     console.log(`${filename_original} ${filaname_save} ${file_url}`);
// })



myRouter.post('/', (req, res) => {
// ToDo: - article already exists
// ToDo: - validate input
    const { title, headline, picture, text } = req.body;

    const createOneArticle = {
        text: `
        INSERT INTO recepies (title, headline, picture, text)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
        values: [title, headline, req.newFilename, text],
    };
    console.log(".............................................")
    console.log(req.body);

    // db.query(createOneArticle)
    //     .then((dbData) => res.status(201).json(dbData.rows))
    //     .catch((err) => res.sendStatus(500));
})



// ToDo: - edit one article


myRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    const createOneArticle = {
        text: `
        DELETE FROM recepies
        WHERE id = $1
        RETURNING *;
        `,
        values: [id]
    };

    db.query(createOneArticle)
    .then((dbData) => {
        if (!dbData.rows.length) {
            return res.status(404).send("Article not found.");
        }
        res.json(dbData.rows);
    })
    .catch((err) => res.sendStatus(500));
})


module.exports = myRouter;