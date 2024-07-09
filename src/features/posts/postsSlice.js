import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch popular posts from Reddit
export const fetchPopularPosts = createAsyncThunk(
  'posts/fetchPopularPosts',
  async () => {
    try {
      const response = await axios.get('https://www.reddit.com/r/popular.json');
      return response.data.data.children.map(child => ({
        id: child.data.id,
        title: child.data.title,
        selftext: child.data.selftext,
        url: child.data.url,
        thumbnail: child.data.thumbnail,
      }));
    } catch (error) {
      throw Error('Failed to fetch popular posts');
    }
  }
);

// Async thunk to fetch posts from a specific subreddit
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit) => {
    try {
      const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
      return response.data.data.children.map(child => ({
        id: child.data.id,
        title: child.data.title,
        selftext: child.data.selftext,
        url: child.data.url,
        thumbnail: child.data.thumbnail,
      }));
    } catch (error) {
      throw Error(`Failed to fetch posts from /r/${subreddit}`);
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
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
