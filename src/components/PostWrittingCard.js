import React from "react";

// const PostWrittingCard = (props) => {

//     return (
//         <div>
//             {/* <form  onSubmit={props.createPost}> */}
//             <div className="createPost">

//                         <div className="icon" >
//                             <i  className="far fa-user"></i>
//                         </div>
//                        <div>
//                             <input type="text" name="createPost" id="createPost" required  placeholder="what's on your mind, ......?" />
//                        </div>
//                         <div className="createPost">
//                             {/* <input type="createPost" value="Create post"/>   */}
//                             <button type="button" onClick={props.createPost}>Create post</button>
//                         </div>

//                 </div>
//             {/* </form> */}
//         </div>
//     );
// };

class PostWrittingCard extends React.Component {
  state = {
    inputValue: "",
  };

  changeHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  postCreate = () => this.state.inputValue ? this.props.createPost(this.state.inputValue) : alert("Write something first!")

  render() {
    return (
      <div>
        <div className="createPost">
          <div className="icon">
            <i className="far fa-user"></i>
          </div>
          <div>
            <input
              type="text"
              name="createPost"
              id="createPost"
              required
              onChange={this.changeHandler}
              placeholder="what's on your mind, ......?"
            />
          </div>
          <div >
            <input type="button" onClick={this.postCreate} value="Create post"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostWrittingCard;
