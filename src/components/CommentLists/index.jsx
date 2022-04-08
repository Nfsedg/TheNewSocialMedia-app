import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import useComments from '../../hooks/useComments';
import { postComments } from '../../services/commentService';
import { TokenContext } from '../../context/TokenContext';
import style from './commentList.module.css';

function CommentList({ postId }) {
  const { comments, setComments } = useComments(postId);
  const { token } = useContext(TokenContext);
  const [comment, setComment] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const bodyComment = {
      postId,
      content: comment,
    };
    const postData = await postComments(token.token, bodyComment);
    setComments([...comments, postData]);
    setComment('');
  };

  return (
    <div className={style.comment_wrapper}>
      <div>
        {
          comments.map((c) => (
            <Comment key={c.id} content={c.content} />
          ))
        }
      </div>
      <form onSubmit={submitHandler} className={style.comment_form}>
        <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default CommentList;

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
};
