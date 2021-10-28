import { HashLink } from 'react-router-hash-link';

const List = ({ posts }) => {


    return (
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
    )
}


export default List;

