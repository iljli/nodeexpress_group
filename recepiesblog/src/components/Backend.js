import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';


const myTheme = createTheme({
    palette: {
        primary: {
            light: '#4dabf5',
            main: '#blue',
            dark: '#1769aa',
            contrastText: '#000000',
        },
    },
});
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
        // console.log("handleClear");
        setStatus({ postToDatabaseDone: false });
        setUserInput(emptyUserInput);
    }

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }
    const uploadFile = (file) => {

        // add file to FormData object
        const fd = new FormData();
        fd.append('file', file);
        Object.entries(userInput).forEach(([key, value]) => {
            fd.append(key, value);
        })

        console.log(fd.get('headline'))
        // multipart/form-data
        // console.log(fd)
        // send `POST` request
        fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: fd
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }

    // const onChangeHandlerFileSelect = (event) => {
    //     // console.log(event.target.files[0]);
    //     setSelectedFile(event.target.files[0]);
    //     // setUserInput({...userInput, selectedFile});
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("test")
        // console.log(userInput);
        // ToDo: input-validation with error handling
        // uploadFile(selectedFile);
        // console.log(JSON.stringify(userInput));
        uploadFile(selectedFile);

        const apiURL = "http://localhost:4000/api/articles";

        console.log({ userInput })

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

    }



    // const submitHandler = (e) => {
    //     console.log("Upload");
    //     console.log(selectedFile);

    //     uploadFile(selectedFile);

    //     e.preventDefault();

    //     // ToDo: input-validation with error handling
    // }

    const onFileChange = (event) => {
        // console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }
    useEffect(() => {
        // console.log(status);

    }, [userInput, status])

    return (
        <ThemeProvider theme={myTheme}>
            <Link className="menu__anchor" to="/" >
                <IconButton size="large" color="secondary" variant="outlined" className="btn__up" aria-label="up"
                    sx={{
                        position: "fixed",
                        right: "3rem",
                        bottom: "3rem",
                    }}>
                    <HomeOutlinedIcon fontSize="inherit" />
                </IconButton>
            </Link>
            <Container>
                <Typography mt={5} className="hero__title" variant="h1" component="h1">
                    Add new recepie
                </Typography>
                <PostForm
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    userInput={userInput}
                    onClear={handleClear}
                    onFile={onFileChange}
                />

                {/* <div>
                    {status.postToDatabaseDone ? "Sent to Server" : "Not Sent to Server"}
                </div> */}

            </Container>
        </ThemeProvider>
    )
}


export default Backend
