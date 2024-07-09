import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularPosts, selectPosts, fetchPosts } from '../features/posts/postsSlice';
import Post from './Post';
import SearchBar from './SearchBar';



const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading posts: {error}</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
