import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';
import Comment from '../Comment';
import style from './commentList.module.css';
import useComments from '../../hooks/useComments';

function CommentList({ postId }) {
  const { comments } = useComments(postId);
  return (
    <div className={style.comment_wrapper}>
      <div>
        {
          comments.map((c) => (
            <Comment key={c.id} content={c.content} />
          ))
        }
      </div>
      <CommentForm postId={postId} />
    </div>
  );
}

export default CommentList;

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
};
