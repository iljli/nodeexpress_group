import React from 'react'
// import { Link, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import marked from 'marked'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// const { DateTime } = require("luxon");

const Post = ({ text, title, id, headline, picture }) => {

    // console.log(article);
    // console.log(id);
    const linkPicture = `http://localhost:3000/uploads/${picture}`;

    return (
        <Card sx={{
            width: 600,
            marginBottom: 3,
            backgroundColor: "#f3e5f5"

        }} id={id}>
            <CardContent>
                <Typography variant="h3" component="div">
                    {title}
                </Typography>
                <Typography variant="h4" component="div">
                    {headline}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post