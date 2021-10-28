import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './normilize.css';
// import './App.css';
// const express = require('express');
// const blog = express();
// import Posts from './components/Posts';
// import List from './components/List';
// const article = require('./articles');
import Articles from './components/Articles'
import Backend from './components/Backend'

function App() {


  return (
    <div className="App">
      <div>
        <Link to='/articles'>
          Articles
        </Link>
      </div>

      <div>
        <Link to='/backend'>
          Backend
        </Link>
      </div>

      <Switch>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/backend">
          <Backend />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
