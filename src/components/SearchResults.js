import React from 'react';
import PostList from './PostList';

const SearchResults = ({ searchTerm, posts }) => {
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default SearchResults;
