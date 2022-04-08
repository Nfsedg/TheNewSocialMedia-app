import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { deletePost } from '../../services/postsService';
import { TokenContext } from '../../context/TokenContext';
import CommentList from '../CommentLists/index';
import style from './postNote.module.css';
import img from '../../assets/social-ico.webp';
import commentIcon from '../../assets/comment.webp';
import useComments from '../../hooks/useComments';

function PostNote({
  content, username, date, id, updatePostRender,
}) {
  const [deleteError, setDeleteError] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const { token } = useContext(TokenContext);
  const dateformat = new Date(date);
  const { comments } = useComments(id);

  const handleClick = async () => {
    deletePost(id, token.token)
      .then(() => updatePostRender(id))
      .catch(() => {
        setDeleteError(true);
        setTimeout(() => {
          setDeleteError(false);
        }, 4000);
      });
  };

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  const iconStyle = {
    backgroundImage: `url(${commentIcon})`,
  };

  return (
    <div className={style.postWrapper}>
      {deleteError && <p>Something was wrong, posts not deleted</p>}
      <section>
        <article className={style.post__body}>
          <div className={style.post__userdata}>
            <div>
              <img src={img} alt="" />
              <h1>{username}</h1>
            </div>
            <div>
              <span>{`${dateformat.getDay()}/${dateformat.getMonth() + 1}/${dateformat.getFullYear()}`}</span>
            </div>
          </div>
          <button type="button" onClick={handleClick}>Delete</button>
          <div>
            <p>{content}</p>
          </div>
        </article>
      </section>
      <section>
        <button
          className={style.comment_icon}
          style={iconStyle}
          onClick={handleShowComment}
          type="button"
          aria-label="show comments"
        />
        {' '}
        <span>{comments.length}</span>
        { showComment && <CommentList postId={id} /> }
      </section>
    </div>
  );
}

export default PostNote;

PostNote.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  updatePostRender: PropTypes.func.isRequired,
};
