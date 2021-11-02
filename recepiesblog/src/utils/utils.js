const multer = require("multer");
const path = require("path");

const uploadFolder = path.resolve("public/uploads");


// define the destination where to upload and
// change the filename if desired
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => { 
        // console.log(file);
        const timestamp = Date.now();
        cb(null, `${timestamp}_${file.originalname}`);
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

// if no renaming of file necessary, then do:
// const upload = multer({ dest: "./public/uploads" });
// if renaming of file, then do:
const upload = multer({ storage: storage, fileFilter: validate });

module.exports = {
    validate,
    storage,
    upload,
}