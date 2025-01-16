import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHiveApi } from '../hooks/useHiveApi';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { HivePost } from '../types/hive.d';

const Post: React.FC = () => {
  const { author, permlink } = useParams<{ author: string; permlink: string }>();
  const [post, setPost] = useState<HivePost | null>(null);
  const { getPost } = useHiveApi();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(author, permlink);
      setPost(post);
    };
    fetchPost();
  }, [author, permlink, getPost]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <MarkdownRenderer content={post.body} />
    </div>
  );
};

export default Post;