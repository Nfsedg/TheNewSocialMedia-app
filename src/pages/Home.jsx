import { useContext, useState } from 'react';
import { TokenContext } from '../context/TokenContext';
import PostFrom from '../components/PostsFrom/index';
import PostsList from '../components/PostsList/PostsList';
import style from './styles/groups.module.css';

function Home() {
  const { token } = useContext(TokenContext);
  const [posts, setPosts] = useState([]);

  return (
    <main>
      {token
        ? <PostFrom posts={posts} setPosts={setPosts} />
        : (
          <div className={style.warning_post}>
            <p>Must log to post</p>
          </div>
        )}
      <PostsList posts={posts} setPosts={setPosts} />
    </main>
  );
}

export default Home;
