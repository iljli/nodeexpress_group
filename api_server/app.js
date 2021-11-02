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
const multer = require("multer");
app.use(express.json());
app.use(cors()); // allows to enable cors
const path = require("path");

const uploadFolder = path.resolve("./public/uploads");

// define the destination where to upload and
// change the filename if desired
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => { 
        // console.log(file);
        const timestamp = Date.now();
        const newFilename = `${timestamp}_${file.originalname}`;
        cb(null, newFilename);
        req.newFilename = newFilename
    }
});


const validate = (req, res, next) => {
    const validateMimetype = (mimetypeFile) => {
        const allowedMimetypes = [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "image/gif",
        ];
        return (allowedMimetypes.includes(mimetypeFile))
    }

    if (res.originalname.match(/\.(jpg|png|gif|jpeg)/i) && validateMimetype(res.mimetype)) {
        return next(null, true);       // accept file
    } else {
        // next(null, false);   // reject file
        return next(new Error("File is not an image."), false);
    }
}

const uploadFilenameToSQL = (req, res, next) => {
    console.log("Test Filename...");
    console.log(req.newFilename);
    console.log(req.body);
    next();
}


// if no renaming of file necessary, then do:
// const upload = multer({ dest: "./public/uploads" });
// if renaming of file, then do:
const upload = multer({ storage: storage, fileFilter: validate });
// var upload = multer({ dest: "../public/uploads/" });

app.post("/upload", upload.single("file"), uploadFilenameToSQL, async (req, res) => {
  try {    
    if (req.file) {
      res.send({
        status: true,
        message: "File Uploaded!",
      });
    } else {
      res.status(400).send({
        status: false,
        data: "File Not Found :(",
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use('/api/articles', travelRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})