import { HashLink } from 'react-router-hash-link';
import Container from '@mui/material/Container';

const ListPosts = ({ posts }) => {


    return (
        <Container>

            <ul className="listOfArticles">
                {posts && posts.map((article, index) =>
                    <li key={index.toString()}>
                        <HashLink
                            className="linkToArticle"
                            smooth
                            to={`/articles#${article.id}`}
                            key={index.toString()}>
                            {article.headline}
                        </HashLink>
                    </li>
                )}
            </ul>
        </Container>
    )
}


export default ListPosts;

