const express = require("express");
const usersRouter = express.Router();
const db = require("./client");
const { validationResult } = require("express-validator");
const { userValidation } = require("../validation");

module.exports = usersRouter;

usersRouter.get("/time", (req, res) => {
    db.query("SELECT NOW()")
        .then((dbData) => res.send(dbData.rows[0]))
        .catch((err) => res.sendStatus(500));
})


usersRouter.get("/", (req, res) => {
    db.query('SELECT * FROM users;')
        .then((dbData) => res.json(dbData.rows))
        .catch((err) => res.sendStatus(500));
})


usersRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const oneUser = {
        text: "SELECT * FROM users WHERE id = $1;",
        values: [id],
    };

    db.query(oneUser)
        .then((dbData) => res.json(dbData.rows))
        .catch((err) => res.sendStatus(500));
})


usersRouter.post("/", userValidation, (req, res) => {
    const { first_name, last_name, age, active } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(402).json({
            errors: errors.array(),
        });
    }

    const createOneUser = {
        text: `
        INSERT INTO users (first_name, last_name, age, active)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
        values: [first_name, last_name, age, active],
    };

     db.query(createOneUser)
    .then((dbData) => res.status(201).json(dbData.rows))
    .catch((err) => res.sendStatus(500));
})


usersRouter.put("/:id", userValidation, (req, res) => {
    const { first_name, last_name, age, active } = req.body;
    const { id } = req.params;

    const updateOneUser = {
        text: `
        UPDATE users
        SET first_name=$1, last_name=$2, age=$3, active=$4
        WHERE id=$5
        RETURNING *;
        `,
        values: [first_name, last_name, age, active, id],
    };

    db.query(updateOneUser)
    // .then((dbData) => res.status(201).json(dbData.rows))
    .then((data) => res.json(data.rows))
    .catch((err) => res.sendStatus(500));
})

usersRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    
    const deleteOneUser = {
        text: `
        DELETE FROM users
        WHERE id = $1
        RETURNING *;
        `,
        values: [id]
    };

    db.query(deleteOneUser)
    .then((dbData) => {
        if (!dbData.rows.length) {
            return res.status(404).send("User not found.");
        }
        res.json(dbData.rows);
    })
    .catch((err) => res.sendStatus(500));
})