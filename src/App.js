import React from 'react';
import PostList from './components/PostList';
import SideMenu from './components/SideMenu';
import SearchBar from './components/SearchBar'; // Import the SearchBar component

function App() {
  return (
    <div className="App">
      <header>
        <div class="logo">
        <img src="./logoreddit.png" alt="reddit logo" />
        <h1>reddit<span>GO</span></h1>
        </div>
      </header>
      <div className="content">
        <div className="sidebar">
          <button><img src='./popularicon.png' alt='home icon' />  Home</button>
          <button><img src='./homeicon.png' alt='popular icon' />  Popular</button>
        </div>
        <PostList />
        <SideMenu />
      </div>
    </div>
  );
}

export default App;