import React from "react";
import "./PostCard.css";
import like from "./thumbs-up.svg";
import comment from "./comment-alt.svg";
class PostCard extends React.Component {
  state = {
    writeComment: false,
    likes: 0,
    yourLike: false,
  };

  setWriteComment = () => {
    this.setState({
      writeComment: !this.state.writeComment,
    });
  };

  likesCounter = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  setYourLike = () => {
    this.setState({
      yourLike: !this.state.yourLike,
    });
  };

  likeHandler = () => {
    this.setYourLike();
    if (!this.state.yourLike) {
      this.likesCounter();
    }
  };

  render() {
    return (

      // <div className="cardContainer">
          
        <div className="card">
          <div className="headerSec">
            <div className="avatar">{this.props.avatar}</div>
            <div className="userTime">
              <p>{this.props.username}</p>
              <p id="timeStamp">{this.props.timestamp}</p>
            </div>
          </div>

          <p>{this.props.userPost}</p>
          <div className="likes">
            <div>
              <img src={like} alt="icon" style={{ width: 20, height: 15 }} />
            </div>
            {/* <span>{this.state.likes}</span> */}
            <span>{this.props.likes}</span>
          </div>
          <hr />
          <div className="buttons">
            <button className="like" onClick={this.likeHandler}>
              <img src={like} alt="icon" style={{ width: 30, height: 20 }} />
              <span>Like</span>
            </button>
            <button className="comment" onClick={this.setWriteComment}>
              <img src={comment} alt="icon" style={{ width: 30, height: 20 }} />
              <span>Comment</span>
            </button>
          </div>
          <hr />
          <div>
            {this.state.writeComment ? (
              <textarea defaultValue="write a comment"></textarea>
            ) : (
              ""
            )}
          </div>
        </div>
      // </div>
    );
  }
}

export default PostCard;


