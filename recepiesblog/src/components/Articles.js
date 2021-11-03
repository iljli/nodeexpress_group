import React, { useEffect, useState } from 'react';

import '../normilize.css';
import ListPosts from './ListPosts';
import Posts from './Posts';
import Menu from './Menu';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import '../App.css'


const Articles = ({ colorPrimary, colorSecondary }) => {

    const [articles, setArticles] = useState();


    useEffect(() => {
        fetch("http://localhost:4000/api/articles")
            .then((res) => res.json())
            .then((data) => setArticles(data))
            .catch((err) => console.log(err));
        // ToDo: error-handling
    }, []);


    return (
        <>
            <Menu posts={articles} colorPrimary={colorPrimary} colorSecondary={colorSecondary} />
            <Container>
                <Typography mt={15} className="hero__title" variant="h1" component="h1">
                    Amaizing Colection of Recepies
                </Typography>

            </Container>
            {/* <ListPosts posts={articles} id={"top"} /> */}

            <main>
                <Posts posts={articles} />

                <HashLink smooth to='articles#top'>
                    <IconButton size="large" color={colorSecondary} variant="outlined" className="btn__up" aria-label="up"
                        sx={{
                            position: "fixed",
                            right: "3rem",
                            bottom: "3rem",
                        }}>
                        <ArrowUpwardIcon fontSize="inherit" />
                    </IconButton>
                </HashLink>
            </main>

        </>
    )
}


export default Articles;
