import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const SideMenu = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(state => state.subreddits.subreddits);

  const handleSubredditClick = (subreddit) => {
    dispatch(fetchPosts(subreddit));
  };

  return (
    <div className="side-menu">
      <h2>Popular Subreddits</h2>
      <ul>
        {subreddits.map(subreddit => (
          <li key={subreddit.name} onClick={() => handleSubredditClick(subreddit.name)}>
            <img src={subreddit.thumbnail} alt={subreddit.name} className="subreddit-thumbnail" />
            {subreddit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
