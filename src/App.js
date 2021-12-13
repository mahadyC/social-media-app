
import './App.css';
import PostCard from './PostCard';

function App() {

  let posts = [
    {
      avatar: "avt-1",
      username: "John",
      timestamp: "time",
      userPosts: [{id: "post-1" , postObj: {id:"post-obj-1", post: "What a beutiful life!", likes: 10, comments:[]}}],
    },
    {
      avatar: "avt-2",
      username: "Jane",
      timestamp: "time",
      userPosts: [{id: "post-2" , postObj: {id:"post-obj-2", post: "What a beutiful day!", likes: 9, comments:[]}}],
    },
    {
      avatar: "avt-3",
      username: "Teressa",
      timestamp: "time",
      userPosts: [{id: "post-3" , postObj: {id:"post-obj-3", post: "What a beutiful weather!", likes: 7, comments:[]}}],
    }
  ];

  return (
    <div className="app">
      <h1>Social media app</h1>
      {posts.map(post => <PostCard avatar={post.avatar} username={post.username} timestamp={post.timestamp}/>)}
      
    </div>
  );
}
export default App;
