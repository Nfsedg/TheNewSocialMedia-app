import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { postComments } from '../../services/commentService';
import { TokenContext } from '../../context/TokenContext';
import useComments from '../../hooks/useComments';
import style from './style.module.css';

export default function CommentForm({ postId }) {
  const { comments, setComments } = useComments(postId);
  const { token } = useContext(TokenContext);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const bodyComment = {
      postId,
      content: comment,
    };
    if (token) {
      postComments(token.token, bodyComment)
        .then((postData) => setComments([...comments, postData]))
        .catch((err) => {
          setError(err.message);
        });
      setComment('');
    } else {
      setError('You must be logged to comment');
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={style.comment_form}>
        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <span style={{ color: 'red' }}>{error}</span>
    </>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};
