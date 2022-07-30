import PostNote from '../PostNote/PostNote';
import usePosts from '../../hooks/usePosts';
import PostLoader from '../Loader';
import WarningMessage from '../WarningMessage';

function PostsList() {
  const {
    posts, setPosts, error, loading,
  } = usePosts();

  const updatePostRender = (id) => {
    const postFind = posts.find((item) => item.id === id);
    const index = posts.indexOf(postFind);

    const newPosts = [...posts];

    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <div>
      {
        error && <WarningMessage>Something was wrong</WarningMessage>
      }
      {
        loading
          ? (
            <div>
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </div>
          )
          : posts.map((item) => (
            <div key={item.id}>
              <PostNote
                id={item.id}
                content={item.content}
                username={item.user.name}
                imageId={item.user.profileImage}
                date={item.date}
                updatePostRender={updatePostRender}
              />
            </div>
          ))
          }
    </div>
  );
}

export default PostsList;
