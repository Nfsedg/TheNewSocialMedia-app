import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostNote from '../PostNote/PostNote';
import { getPost } from '../../services/postsService';

function PostsList({ posts, setPosts }) {
  useEffect(async () => {
    const postsData = await getPost();
    setPosts(postsData);
  }, []);

  const updatePostRender = (id) => {
    const postFind = posts.find((item) => item.id === id);
    const index = posts.indexOf(postFind);

    const newPosts = [...posts];

    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <div>
      {
        posts.map((item) => (
          <div key={item.id}>
            <PostNote
              id={item.id}
              content={item.content}
              username={item.user.name}
              date={item.date}
              updatePostRender={updatePostRender}
            />
          </div>
        ))
          }
    </div>
  );
}

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  })).isRequired,
  setPosts: PropTypes.func.isRequired,
};
