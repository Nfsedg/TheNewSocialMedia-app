import PropTypes from 'prop-types';
import style from './commentButton.module.css';

function CommentButton({ handleShowComment, comments }) {
  return (
    <div className={style.iconSection}>
      <button
        className={style.button_icon}
        onClick={handleShowComment}
        type="button"
        aria-label="show comments"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      {' '}
      <p>{comments}</p>
    </div>
  );
}

export default CommentButton;

CommentButton.propTypes = {
  handleShowComment: PropTypes.func.isRequired,
  comments: PropTypes.number.isRequired,
};
