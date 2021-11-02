import React from 'react'
import { useState, useEffect } from "react";
import PostForm from './PostForm';
import FileForm from "./FileForm";

const Backend = props => {
    const emptyUserInput = {
        title: "",
        headline: "",
        picture: "",
        text: ""
    }

    const initialStatus = {
        postToDatabaseDone: false,
    }

    const [userInput, setUserInput] = useState(emptyUserInput);
    const [status, setStatus] = useState(initialStatus);
    const [selectedFile, setSelectedFile] = useState();

    const handleClear = () => {
        console.log("handleClear");
        setStatus({ postToDatabaseDone: false });
        setUserInput(emptyUserInput);
    }

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    const onChangeHandlerFileSelect = (event) => {
        // console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
        // setUserInput({...userInput, selectedFile});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userInput);
        // ToDo: input-validation with error handling

        const apiURL = "http://localhost:3000/api/articles";

        const parameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInput)
        }

        fetch(apiURL, parameters)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to create post");
                return res;
            })
            .then(setStatus({ postToDatabaseDone: true }))
            .catch((e) => {
                setUserInput(emptyUserInput);
                console.log(e);
            });

        uploadFile(selectedFile);
    }


    const uploadFile = (file) => {

        // add file to FormData object
        const fd = new FormData();
        fd.append('file', file);

        // send `POST` request
        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: fd
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        // console.log(status);

    }, [userInput, status])

    return (
        <div>
            <h1>Backend...</h1>

            <PostForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                userInput={userInput}
                onClear={handleClear}
            />

            <div>
                {status.postToDatabaseDone ? "Sent to Server" : "Not Sent to Server"}
            </div>

            <div className="container">
                <div className="row">
                    <h3>File Upload</h3>
                    <div className="form-group">
                        <input type="file" name="selectedFile" id="fileId" onChange={onChangeHandlerFileSelect} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Backend
