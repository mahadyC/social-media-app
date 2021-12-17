
import React from 'react';

import PostCard from './components/PostCard';

import PostWrittingCard from './components/PostWrittingCard';


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

  createPost = (post) => {
    this.setState({
        posts: [ 
        {avatar: "avt-4",
        username: "Lisbon",
        timestamp: "time",
        userPosts: post}, ...this.state.posts]
    })
  }

  // [{id: "post-3" , postObj: {id:"post-obj-3", post: "What a beutiful weather!", likes: 7, comments:[]}}]
  render(){
    return (
      <div className="app">
        <PostWrittingCard createPost={this.createPost}/>
        <div className="postsHolder">
        {this.state.posts.map(post => 
           <PostCard avatar={post.avatar} username={post.username} timestamp={post.timestamp} userPost={post.userPosts}/>
        )}
        </div>
        <footer>Copyrights reserved by BravoFA softwares limited 2021</footer>
      </div>
    );
  }
}
export default App;
