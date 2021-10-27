const express = require('express');
myRouter = express.Router();

const articles = require('./articles')


const createElement = (element) => {
    const newElement = {
        id: articles.length,
        title: element.title,
        headline: element.headline,
        picture: element.picture,
        text: element.text
    }
    return newElement;
}


function sendNotFound(element, res) {
    console.log(`Element ${element} not found`);
    res.status(404).send();
}


myRouter.get('/', (req, res) => {
    const isSort = req.query.sort;
    if (isSort === "true") {
        const sortedArray = [...articles].sort((a, b) => (a.title > b.title) ? 1 : -1);
        res.send(sortedArray);
    } else {
        res.send(articles);
    }
})


// ToDo - missing: foundEntry
myRouter.get('/:title', (req, res) => {
    const article = req.params.title;
    if (foundEntry) {
        res.send(foundEntry)
    } else {
        sendNotFound(article, res);
    }
})


myRouter.post('/', (req, res) => {
    const receivedElement = createElement(req.body)
    const title = receivedElement.title;
    const headline = receivedElement.headline;

    const foundTitle = articles.find(c => c.title === title);
    const foundHeadline = articles.find(c => c.headline === headline);

    if (foundTitle || foundHeadline) {
        console.log("Article already exists...");
        res.status(204).send(receivedElement);
    } else {
        articles.push(receivedElement);
        res.status(201).send(receivedElement);
    }

})
 
// ToDo: chaning specific item
myRouter.put('/:item', (req, res) => {
    const title = req.params.item;
    const receivedElement = req.body;
    const foundEntry = articles.find(c => c.title === title);
    if (foundEntry) {
        // console.log(foundEntry);
        // const key = Object.keys(receivedElement);
        // const value = Object.values(receivedElement).toString();
        // foundEntry[key] = value;
        // articles[articles.indexOf(foundEntry)] = foundEntry;
        // res.send(foundEntry)
    } else {
        sendNotFound(title, res);
    }
    console.log(title);
    console.log(receivedElement); 
})


myRouter.delete('/:code', (req, res) => {
    const title = req.params.code;
    const foundEntry = articles.find(c => c.title === title);
    if (foundEntry) {
        articles.splice(articles.indexOf(foundEntry), 1);
        res.status(200).send(foundEntry);
    } else {
        sendNotFound(title, res);
    }
})


module.exports = myRouter;