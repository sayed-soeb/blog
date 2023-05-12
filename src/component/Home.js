import { useState, useEffect } from 'react';
import { db } from './firebase';
import { Link } from 'react-router-dom';
import { collection , query ,where , getDocs} from 'firebase/firestore';

function Home() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  async function fetchData() {
    const querySnapshot=await getDocs(collection(db,"blogs"));
    const posts=querySnapshot.docs.map((doc)=> {
      return {
        ids:doc.id,
        ...doc.data(),
      };
    });
    setPosts(posts);}
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Sayed</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.ids}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
