import React from 'react'
// import { Link, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import marked from 'marked'
import '../App.css';

// const { DateTime } = require("luxon");

const Post = ({ text, title, id, headline }) => {

    // console.log(article);
    // console.log(id);

    return (
         <div className={'post'} id={id}>
             <h2 className={'title'}>{title}</h2>
             <h3 className={'headline'}>{headline}</h3>
            {/* {featureImage && <img className='featureImage' src={featureImage.fields.file.url} alt={name} title={name} />} */}
            {text}
             <HashLink className="linkToArticle" smooth to='articles#top'>
                 <button> Go Up</button>
             </HashLink>
        </div>
    )
}

export default Post