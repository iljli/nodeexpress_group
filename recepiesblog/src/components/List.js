// import React, { useState, useEffect } from 'react';
// import { Link, Route, Switch } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const List = ({ posts }) => {


    // console.log(posts);
    // posts && posts.map((article, index) => {
        // console.log(article)
        // console.log(article.headline)
    // })

    return (
        <ul className="listOfArticles">
            {posts && posts.map((article, index) =>
                <li key={index.toString()}>
                    <HashLink
                        className="linkToArticle"
                        smooth
                        to={`/page#${article.title.replaceAll(" ", "")}`} 
                        key={index.toString()}>
                        {article.headline}
                    </HashLink>
                </li>
            )}
        </ul>
    )
}


export default List;

