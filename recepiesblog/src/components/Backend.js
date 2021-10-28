import { useState, useEffect } from "react";
import React from 'react'
import PostForm from './PostForm'

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

    const handleClear = () => {
        console.log("handleClear");
        setStatus({postToDatabaseDone: false});
        setUserInput(emptyUserInput);
    }

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
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
            .then(setStatus({postToDatabaseDone: true}))
            .catch((e) => {
                setUserInput(emptyUserInput);
                console.log(e);
            });
    }

    useEffect(() => {
        console.log(status);
        
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

        </div>
    )
}


export default Backend
