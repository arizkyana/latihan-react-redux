import React from 'react';
import logo from './logo.svg';
import './App.css';

import PostsContainer from './containers/posts';

function App() {
  return (
    <div className="App">
      <h1>Latest Post</h1>
      <hr />
      <PostsContainer />
    </div>
  );
}

export default App;
