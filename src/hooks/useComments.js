import { useState, useEffect } from 'react';
import { getComments } from '../services/commentService';

function useComments(postId) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (postId) {
      getComments(postId).then((res) => setComments(res));
    }
  }, []);

  return {
    comments,
    setComments,
  };
}

export default useComments;
