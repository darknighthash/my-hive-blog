import React, { useEffect, useState } from 'react';
import { useHiveApi } from '../hooks/useHiveApi';
import PostCard from '../components/PostCard';
import { HivePost } from '../types/hive.d';

const user_name = import.meta.env.VITE_HIVE_USERNAME;

const Home: React.FC = () => {
  const [posts, setPosts] = useState<HivePost[]>([]);
  const { getPostsByAuthor } = useHiveApi();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostsByAuthor(user_name); // 使用环境变量中的用户名
      setPosts(posts);
    };
    fetchPosts();
  }, [getPostsByAuthor]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">MY Hive Blog - By: {user_name}</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.permlink} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;