import React from 'react';
import './normilize.css';
// import './App.css';
// const express = require('express');
// const blog = express();
import Posts from './components/Posts';
import List from './components/List';
const article = require('./articles');

function App() {


  // console.log(article)

  // Server: http://localhost:4444

  return (
    <div className="App">
      <div className='container'>

        <header>
          <div className='wrapper' id="home">
            <span>Amaizing Colection of Recepies</span>
          </div>
        </header>

        <div>
          <List posts={article} />
        </div>

        <main>
          <div className='wrapper'>
            {/* <Posts posts={this.state.articles} /> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;


//creation of an API

