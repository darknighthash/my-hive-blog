import React from 'react';
import { HivePost } from '../types/hive.d';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  post: HivePost;
}



const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // 跳转到文章详情页
    navigate(`/${post.author}/${post.permlink}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
   
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-500">By {post.author}</p>
        <p className="text-gray-400 text-sm">
          {new Date(post.created).toLocaleDateString()}
        </p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;