import { Client } from '@hiveio/dhive';

const node=JSON.parse(import.meta.env.VITE_HIVE_NODE)

const client = new Client(node);

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

  const getPostsByTag = async (tag: string, limit: number = 10) => {
    try {
      const posts = await client.database.getDiscussions('created', {
        tag,
        limit,
      });
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
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

  const getPostsByAuthorAndTag = async (author: string, tag: string, limit: number = 10) => {
    try {
      // 先获取作者的文章
      const posts = await client.database.getDiscussions('blog', {
        tag: author,
        limit,
      });
      // 手动过滤出包含指定标签的文章
      return posts.filter((post: any) => post.tags.includes(tag));
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };

  return { getPost, getPostsByTag, getPostsByAuthor, getPostsByAuthorAndTag };
};