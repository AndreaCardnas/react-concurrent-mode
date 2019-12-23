import React from 'react';
import { ListGroup, ListGroupItem } from 'shards-react';

export default function Posts({ resource }) {
  const posts = resource.posts.read();
  return (
    <section>
      <h3>Latest Posts</h3>
      <ListGroup>
        {posts.map((post) => (
          <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
        ))}
      </ListGroup>
    </section>
  );
}
