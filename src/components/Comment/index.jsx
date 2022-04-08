import PropTypes from 'prop-types';
import style from './comment.module.css';

function Comment({ content }) {
  return (
    <div className={style.comment}>
      <p>{content}</p>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  content: PropTypes.string.isRequired,
};
