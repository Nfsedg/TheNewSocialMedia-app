import PropTypes from 'prop-types';

function PostContext({
  showEditInput, handlerEdit, contentPost, setContentPost,
}) {
  return (
    <div>
      {
        showEditInput
          ? <form onSubmit={handlerEdit}><input type="text" value={contentPost} onChange={(e) => setContentPost(e.target.value)} /></form>
          : <p>{contentPost}</p>
        }

    </div>
  );
}

export default PostContext;

PostContext.propTypes = {
  showEditInput: PropTypes.bool.isRequired,
  handlerEdit: PropTypes.func.isRequired,
  contentPost: PropTypes.string.isRequired,
  setContentPost: PropTypes.func.isRequired,
};
