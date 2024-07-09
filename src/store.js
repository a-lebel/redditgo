import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import subredditsReducer from './features/subreddits/subredditsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
  },
});

export default store;
