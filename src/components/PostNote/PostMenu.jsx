import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';
import style from './postNote.module.css';

function PostMenu({
  handleClick, showmenu, setShowmenu, setEditInput, handleShowMenu,
}) {
  const { menuRef } = useModal(setShowmenu, showmenu);

  return (
    <div className={style.postmenu_buttonWrapper}>
      <button
        className={style.postmenu_button}
        type="button"
        aria-label="post menu"
        onClick={handleShowMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
      {
          showmenu && (
          <div ref={menuRef} className={style.postMenu}>
            <div>
              <div
                onClick={handleClick}
                onKeyDown={handleClick}
                role="button"
                aria-label="show comments"
                tabIndex={0}
              >
                <span>Delete</span>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  setShowmenu((prevState) => !prevState);
                  setEditInput((prevState) => !prevState);
                }}
                onKeyDown={() => {
                  setShowmenu((prevState) => !prevState);
                  setEditInput((prevState) => !prevState);
                }}
                role="button"
                aria-label="show comments"
                tabIndex={0}
              >
                <span>Edit</span>
              </div>
            </div>
          </div>
          )
        }
    </div>
  );
}

export default PostMenu;

PostMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showmenu: PropTypes.bool.isRequired,
  setShowmenu: PropTypes.func.isRequired,
  setEditInput: PropTypes.func.isRequired,
  handleShowMenu: PropTypes.func.isRequired,
};
