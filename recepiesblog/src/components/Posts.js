import React from 'react'
import Post from './Post'
// import { Link, Route, Switch } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => (
                <div>
                    <Post  article={article} key={index} />
                </div>
            )

            )}
        </div>
    )
}

export default Posts;
