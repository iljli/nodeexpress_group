import Post from './Post'
// import { Link, Route, Switch } from "react-router-dom";

const Posts = ({ posts }) => {

    // console.log(posts);

    return (
        <div>
            {posts && posts.map((article, index) => (
                <div key={index.toString()} >
                     <Post text={article.text} title={article.title} headline={article.headline} key={index} id={article.id}/>
                </div>
            )

             )}
        </div>
    )
}

export default Posts;
