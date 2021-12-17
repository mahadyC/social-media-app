
import React from 'react';

import PostCard from './components/PostCard';

class App extends React.Component {

  state= {
    posts: [
      {
        avatar: "avt-1",
        username: "John",
        timestamp: "time",
        userPosts:  "What a beutiful life!",
      },
      {
        avatar: "avt-2",
        username: "Jane",
        timestamp: "time",
        userPosts:  "Holidays coming!",
      },
      {
        avatar: "avt-3",
        username: "Teressa",
        timestamp: "time",
        userPosts: "What a beutiful weather!",
      }
    ]
  };

  createPost = () => {
    this.setState({
        posts: [ 
        {avatar: "avt-4",
        username: "Lisbon",
        timestamp: "time",
        userPosts: "This is a new post!"}, ...this.state.posts]
    })
  }

  // [{id: "post-3" , postObj: {id:"post-obj-3", post: "What a beutiful weather!", likes: 7, comments:[]}}]
  render(){
    return (
      <div className="app">
        <h1>Social media app</h1>
        <button onClick={this.createPost}>createPost</button>
        <div className="postsHolder">
        {this.state.posts.map(post => 
           <PostCard avatar={post.avatar} username={post.username} timestamp={post.timestamp} userPost={post.userPosts}/>
        )}
        </div>

      </div>
    );
  }
}
export default App;
