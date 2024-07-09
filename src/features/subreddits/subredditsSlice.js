import { createSlice } from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: [
      { name: 'aww', thumbnail: './logoreddit.png' },
      { name: 'gardening', thumbnail: './logoreddit.png' },
      { name: 'food', thumbnail: './logoreddit.png' },
      { name: 'cats', thumbnail: './logoreddit.png' },
      { name: 'dogs', thumbnail: './logoreddit.png' },
      { name: 'foodporn', thumbnail: './logoreddit.png' },
      { name: 'gardens', thumbnail: './logoreddit.png' },
    ],
  },
  reducers: {},
});

export default subredditsSlice.reducer;
