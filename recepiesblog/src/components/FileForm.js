import React, { useState } from 'react';
const { storage, upload } = require("../utils/utils");

const FileForm = props => {

    const [selectedFile, setSelectedFile] = useState();

    const uploadFile = (file) => {

        // add file to FormData object
        const fd = new FormData();
        fd.append('file', file);

        // send `POST` request
        fetch('http://localhost:3000/', {
            method: 'POST',
            body: fd
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }

    


    const submitHandler = (e) => {
        console.log("Upload");
        console.log(selectedFile);

        uploadFile(selectedFile);

        e.preventDefault();

        // ToDo: input-validation with error handling
    }

    const onChangeHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    return (
        <div className="container">
            <div className="row">
                {/* <form method="POST" action="/upload-picture"> */}
                <h3>File Upload</h3>
                <div className="form-group">
                    <input type="file" name="file" id="fileId" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit" onClick={submitHandler}>Upload</button>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}


export default FileForm
