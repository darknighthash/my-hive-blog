import { Client } from '@hiveio/dhive';

const client = new Client('https://api.hive.blog');

export const useHiveApi = () => {
  const getPost = async (author: string, permlink: string) => {
    try {
      const post = await client.database.call('get_content', [author, permlink]);
      return post;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  };

  const getPostsByAuthor = async (author: string, limit: number = 10) => {
    try {
      const posts = await client.database.getDiscussions('blog', {
        tag: author,
        limit,
      });
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };

  return { getPost, getPostsByAuthor };
};