import React from 'react';

const Post = ({ post }) => {
  const { title, thumbnail, preview, url } = post;

  // Function to get the appropriate image URL
  const getImageUrl = () => {
    // Prefer the full-size URL if available
    if (url) {
      return url;
    }
    // Otherwise, use the largest available preview size
    if (preview && preview.images && preview.images.length > 0) {
      const { source } = preview.images[0]; // Adjust as per Reddit API response structure
      return source.url;
    }
    // Fallback to thumbnail if full-size or preview is not available
    return thumbnail;
  };

  return (
    <div className="post">
      <h3>{title}</h3>
      {/* Render the image using the selected URL */}
      {getImageUrl() && (
        <img src={getImageUrl()} alt={title} />
      )}
      <p>{post.selftext}</p>
      <p className='author'>{post.author}</p>
      <a href={post.url} target="_blank" rel="noopener noreferrer">View Post</a>
    </div>
  );
};

export default Post;
