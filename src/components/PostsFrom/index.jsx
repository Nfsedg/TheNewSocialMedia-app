import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { createPost } from '../../services/postsService';
import { TokenContext } from '../../context/TokenContext';
import style from './postForm.module.css';

function PostFrom({ posts, setPosts }) {
  const [noteText, setNoteText] = useState('');
  const { token } = useContext(TokenContext);

  const submitHandle = async (e) => {
    e.preventDefault();

    const newPostCreated = await createPost(noteText, token.token);
    setPosts(posts.concat(newPostCreated));
    setNoteText('');
  };

  return (
    <div className={style.postFromWrapper}>
      <form onSubmit={submitHandle} className={style.postFrom}>
        <input type="textarea" placeholder="Say Hello!" name="textarea" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostFrom;

PostFrom.propTypes = {
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
