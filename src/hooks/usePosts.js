import { useState, useEffect } from 'react';
import { getPost } from '../services/postsService';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPost()
      .then((postsResponse) => {
        setPosts(postsResponse);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return {
    posts,
    setPosts,
    error,
    loading,
  };
};

export default usePosts;
