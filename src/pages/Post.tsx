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
      if (!author || !permlink) {
        console.error('Author or permlink is missing');
        return;
      }
      try {
        const post = await getPost(author, permlink);
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [author, permlink, getPost]);

  if (!post) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 mb-4">By {post.author}</p>
      <div className="prose max-w-none">
        <MarkdownRenderer content={post.body} />
      </div>
    </div>
  );
};

export default Post;