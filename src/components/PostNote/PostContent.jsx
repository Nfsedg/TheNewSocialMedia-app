import PropTypes from 'prop-types';
import style from './postNote.module.css';

function PostContent({
  showEditInput, handlerEdit, contentPost, setContentPost, setEditInput,
}) {
  return (
    <div>
      {
        showEditInput
          ? (
            <form onSubmit={handlerEdit}>
              <div className={style.editInput__wrapper}>
                <input
                  type="text"
                  value={contentPost}
                  onChange={(e) => setContentPost(e.target.value)}
                  className={style.editinput}
                />
                <div
                  className={style.editinput__cancel}
                  onClick={() => setEditInput((prev) => !prev)}
                  onKeyDown={() => setEditInput((prev) => !prev)}
                  role="button"
                  aria-label="cancel edit comment"
                  tabIndex={0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </form>
          )
          : <p>{contentPost}</p>
        }

    </div>
  );
}

export default PostContent;

PostContent.propTypes = {
  showEditInput: PropTypes.bool.isRequired,
  handlerEdit: PropTypes.func.isRequired,
  contentPost: PropTypes.string.isRequired,
  setContentPost: PropTypes.func.isRequired,
  setEditInput: PropTypes.func.isRequired,
};
