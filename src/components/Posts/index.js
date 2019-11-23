import React from 'react';

const Posts = ({ resource }) => {
  const posts = resource.posts.read();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Latest Posts</strong>
      </li>
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
