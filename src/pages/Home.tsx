import React, { useEffect, useState } from 'react';
import { useHiveApi } from '../hooks/useHiveApi';
import PostCard from '../components/PostCard';
import { HivePost } from '../types/hive.d';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<HivePost[]>([]);
  const { getPostsByAuthor } = useHiveApi();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostsByAuthor('darknightlive'); // 替换为你的 Hive 用户名
      setPosts(posts);
    };
    fetchPosts();
  }, [getPostsByAuthor]);

  return (
    <div>
      <h1>Hive Blog</h1>
      {posts.map((post) => (
        <PostCard key={post.permlink} post={post} />
      ))}
    </div>
  );
};

export default Home;