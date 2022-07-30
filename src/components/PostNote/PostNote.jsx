import PropTypes from 'prop-types';
import {
  useState, useContext, lazy, Suspense,
} from 'react';
import { deletePost, editPost } from '../../services/postsService';
import { TokenContext } from '../../context/TokenContext';
import useTimeAgo from '../../hooks/useTimeAgo';
import PostContent from './PostContent';
import CommentButton from '../CommentButton/CommentButton';
import PostMenu from './PostMenu';
import style from './postNote.module.css';
import useComments from '../../hooks/useComments';
import GetImage from '../GetImage';

const CommentList = lazy(() => import('../CommentLists/index'));

function PostNote({
  content, username, date, id, updatePostRender, imageId,
}) {
  const [contentPost, setContentPost] = useState(content);
  const [deleteError, setDeleteError] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showEditInput, setEditInput] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const { token } = useContext(TokenContext);
  const { comments } = useComments(id);
  const dateformat = useTimeAgo(date);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  const handleShowMenu = () => {
    setShowmenu(!showmenu);
  };

  const handleDelete = async () => {
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
              <GetImage imageId={imageId} />
              <h1>{username}</h1>
              <small>{`${dateformat}`}</small>
            </div>
            {token && (
              <PostMenu
                setShowmenu={setShowmenu}
                handleClick={handleDelete}
                showmenu={showmenu}
                setEditInput={setEditInput}
                handleShowMenu={handleShowMenu}
              />
            )}
          </div>
          <div>
            <PostContent
              showEditInput={showEditInput}
              handlerEdit={handlerEdit}
              contentPost={contentPost}
              setContentPost={setContentPost}
              setEditInput={setEditInput}
            />
          </div>
        </article>
      </section>
      <section>
        <CommentButton handleShowComment={handleShowComment} comments={comments.length} />
        <Suspense fallback="Loading...">
          { showComment && <CommentList postId={id} /> }
        </Suspense>
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
  imageId: PropTypes.string.isRequired,
};
