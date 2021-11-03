import Post from './Post'
import Container from '@mui/material/Container';

// import { Link, Route, Switch } from "react-router-dom";

const Posts = ({ posts }) => {

    // console.log(posts);

    return (
        <Container maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

            {posts && posts.map((article, index) => (
                <div key={index.toString()} >
                     <Post text={article.text} title={article.title} headline={article.headline} key={index} id={article.id} picture={article.picture}/>
                </div>
            )

            )}
        </Container>
    )
}

export default Posts;
