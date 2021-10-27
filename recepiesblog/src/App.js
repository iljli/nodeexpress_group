import React, { useEffect, useState } from 'react';
import './normilize.css';
// import './App.css';
// const express = require('express');
// const blog = express();
import Posts from './components/Posts';
import List from './components/List';
// const article = require('./articles');

function App() {
  const [articles, setArticles] = useState();

  // console.log(article)

  // Server: http://localhost:4444

  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
    .then((res) => res.json())
    .then((data) => setArticles(data))
    .catch((err) => console.log(err));
    // ToDo: error-handling
  }, []);


  return (
    <div className="App">
      <div className='container'>

        <header>
          <div className='wrapper' id="home">
            <span>Amaizing Colection of Recepies</span>
          </div>
        </header>

        <div>
          <List posts={articles} />
        </div>

        <main>
          <div className='wrapper'>
            <Posts posts={articles} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
