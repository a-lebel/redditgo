import React, { useState } from 'react';
import PostList from './components/PostList';
import SideMenu from './components/SideMenu';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Another Post' },
    // Add more posts here
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="./logoreddit.png" alt="reddit logo" />
          <h1>reddit<span>GO</span></h1>
        </div>
        <SearchBar setSearchTerm={setSearchTerm} />
      </header>
      <div className="content">
        <div className="sidebar">
          <button><img src='./popularicon.png' alt='home icon' />  Home</button>
          <button><img src='./homeicon.png' alt='popular icon' />  Popular</button>
        </div>
        {searchTerm ? (
          <SearchResults searchTerm={searchTerm} posts={posts} />
        ) : (
          <PostList posts={posts} />
        )}
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
