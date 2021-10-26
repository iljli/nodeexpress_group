// import React, { useState, useEffect } from 'react';
// import { Link, Route, Switch } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const List = () => {


    
    // DELETE
    const articles = [
        {
            id: 0,
            title: 'Post 1',
            headline: "Crockpot Buffalo Chicken",
            picture: "",
            text: "This is a party favorite, perfect for a Super Bowl or a game night. It takes a long time, but like most slow cooker recipes, is easy as hell. Bonus: guests love it."
        },
        {
            id: 1,
            title: 'Post 2',
            headline: "One Minute Muffin",
            picture: "",
            text: "This flax muffin is quick, vertsatile (just mix in other goodies), and only makes one at a time, so you've got no huge tray to tempt you. Custom muffins every morning!"
        },
        {
            id: 2,
            title: 'Post 3',
            headline: "Pork Steaks",
            picture: "",
            text: "Pork is called the other white meat, but this sous vide technique is so dang good I'm gonna graduate it up to THE white meat."
        },

    
    ]
    // DELETE
    return (
        <ul className="listOfArticles">
            {articles.map((article, index) =>
                <li>
                    <HashLink 
                    className="linkToArticle" 
                    smooth 
                    // to={`/page#${article.title.replaceAll(" ", "")}`} 
                    key={index}>
                        {article.title}
                    </HashLink>
                </li>
            )}
        </ul>
    )
}


export default List

