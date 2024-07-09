import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch popular posts from Reddit
export const fetchPopularPosts = createAsyncThunk(
  'posts/fetchPopularPosts',
  async (subreddit) => { // Accepts subreddit as an argument
    try {
      const url = subreddit ? `https://www.reddit.com/r/${subreddit}/.json` : 'https://www.reddit.com/r/popular.json';
      const response = await axios.get(url);
      return response.data.data.children.map(child => ({
        id: child.data.id,
        title: child.data.title,
        selftext: child.data.selftext,
        author: child.data.author,
        thumbnail: child.data.thumbnail,
        url: child.data.url,
        created_utc: child.data.created_utc,
      }));
    } catch (error) {
      throw Error('Failed to fetch posts');
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;