import React from 'react'
import Post from './Post'
// import { Link, Route, Switch } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div>
            {posts && posts.map((article, index) => (
                <div key={index.toString()} >
                     <Post article={article.text} key={index} />
                    {/* {article.text} */}
                </div>
            )

            )}
        </div>
    )
}

export default Posts;
