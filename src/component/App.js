import { Routes , Route } from 'react-router-dom';
import { Navbar,Home,CreatePost,PostDetail} from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div>
      <Routes>
        <Route exact path="/" element= {<Home />} />
        <Route exact path="/post/:postId" element= {<PostDetail />} />
        <Route exact path="/create-post" element= {<CreatePost />} />
      </Routes></div>
    </div>
  );
}

export default App;
