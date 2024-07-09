import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      {post.thumbnail && post.thumbnail.startsWith('https') && (
        <img src={post.thumbnail} alt={post.title} className="post-image" />
      )}
      <a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default Post;
