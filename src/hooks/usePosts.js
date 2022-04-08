import { useState, useEffect } from 'react';
import { getPost } from '../services/postsService';

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsData = await getPost();
    setPosts(postsData);
  }, []);

  return {
    posts,
    setPosts,
  };
};

export default usePosts;
