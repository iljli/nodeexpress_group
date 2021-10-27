import React from 'react'
// import { Link, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import marked from 'marked'
import '../App.css';


const { DateTime } = require("luxon");

const Post = ({ article }) => {
    // const addZero = (value) => {
    //     if (Math.abs(value) < 10)
    //         return (value = "0" + value) // dirty hack - mixes up string and integer
    //     else return value
    // }

    console.log(article);
    // const { name, featureImage, description, lastUpdated } = article.fields;
    // const postDescription = marked(description);
    // const timestamp = {
    //     hour: addZero(DateTime.fromISO(lastUpdated).hour),
    //     minute: addZero(DateTime.fromISO(lastUpdated).minute),
    //     second: addZero(DateTime.fromISO(lastUpdated).second),
    //     year: addZero(DateTime.fromISO(lastUpdated).year),
    //     month: addZero(DateTime.fromISO(lastUpdated).month),
    //     day: addZero(DateTime.fromISO(lastUpdated).day),
    // }


    return (
        <div>
         {/* <div className={'post'} id={article.fields.name.replaceAll(" ", "")}> */}
             {/* <h2 className={'title'}>{name}</h2> */}
            {/* {featureImage && <img className='featureImage' src={featureImage.fields.file.url} alt={name} title={name} />} */}
            {/* <section dangerouslySetInnerHTML={{ __html: postDescription }} /> */}
            {/* {lastUpdated && <p>Last updated: {timestamp.year}/{timestamp.month}/{timestamp.day} {timestamp.hour}:{timestamp.minute}:{timestamp.second}</p>} */}
            {article}
             <HashLink className="linkToArticle" smooth to='/page#home'>
                 <button> Go Up</button>
             </HashLink>
        </div>
    )
}

export default Post