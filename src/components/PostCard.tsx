import React from 'react';
import { HivePost } from '../types/hive.d';

interface PostCardProps {
  post: HivePost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{new Date(post.created).toLocaleDateString()}</p>
    </div>
  );
};

export default PostCard;