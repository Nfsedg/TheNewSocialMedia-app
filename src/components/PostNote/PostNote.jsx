import PropTypes from 'prop-types';
import {
  useState, useContext,
} from 'react';
import { deletePost, editPost } from '../../services/postsService';
import { TokenContext } from '../../context/TokenContext';
import { dateFormat } from '../../services/dateFormat';
import PostContext from './PostContent';
import CommentButton from '../CommentButton/CommentButton';
import PostMenu from './PostMenu';
import CommentList from '../CommentLists/index';
import style from './postNote.module.css';
import img from '../../assets/social-ico.webp';
import useComments from '../../hooks/useComments';

function PostNote({
  content, username, date, id, updatePostRender,
}) {
  const [contentPost, setContentPost] = useState(content);
  const [deleteError, setDeleteError] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showEditInput, setEditInput] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const { token } = useContext(TokenContext);
  const { comments } = useComments(id);
  const dateformat = dateFormat(date);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  const handleShowMenu = () => {
    setShowmenu(!showmenu);
  };

  const handleClick = async () => {
    if (token) {
      deletePost(id, token.token)
        .then(() => updatePostRender(id))
        .catch((err) => setDeleteError(err));
    } else {
      setDeleteError(true);
    }
  };

  const handlerEdit = async (e) => {
    e.preventDefault();
    const newContentPost = {
      content: contentPost,
      postId: id,
    };

    if (token) {
      editPost(newContentPost, token.token)
        .then((data) => {
          setContentPost(data.content);
          setEditInput((prev) => !prev);
        })
        .catch((err) => setDeleteError(err));
    } else {
      setDeleteError(true);
    }
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
              <small>{`${dateformat}`}</small>
            </div>
            {token && (
              <PostMenu
                setShowmenu={setShowmenu}
                handleClick={handleClick}
                showmenu={showmenu}
                setEditInput={setEditInput}
                handleShowMenu={handleShowMenu}
              />
            )}
          </div>
          <div>
            <PostContext
              showEditInput={showEditInput}
              handlerEdit={handlerEdit}
              contentPost={contentPost}
              setContentPost={setContentPost}
            />
          </div>
        </article>
      </section>
      <section>
        <CommentButton handleShowComment={handleShowComment} comments={comments.length} />
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
