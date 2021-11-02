import React from 'react'
// import { Link, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import marked from 'marked'
import '../App.css';

// const { DateTime } = require("luxon");

const Post = ({ text, title, id, headline, picture }) => {

    // console.log(article);
    // console.log(id);
    const linkPicture = `http://localhost:3000/uploads/${picture}`;

    return (
        <div>
            <div className={'post'} id={id}>
                <h2 className={'title'}>{title}</h2>
                <h3 className={'headline'}>{headline}</h3>
                {picture && <img src={linkPicture} alt="picture" width="200" />}
                {text}
            </div>

            <HashLink className="linkToArticle" smooth to='articles#top'>
                <button> Go Up</button>
            </HashLink>
        </div>
    )
}

export default Post