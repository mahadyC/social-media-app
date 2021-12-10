import React from 'react';

const PostWrittingCard = ({change,submit}) => {
   
    return (
        <div>
            <form  onSubmit={submit}>
            <div className="createPost">
            
                        <div className="icon" > 
                            <i  className="far fa-user"></i>
                        </div>
                       <div>
                            <input type="text" name="createPost" id="createPost" required onChange = {change}  placeholder="what's on your mind, ......?" />
                       </div>
                        <div className="submit">
                            <input type="submit" value="Create post"/>  
                        </div>
                        
                </div>
            </form>
        </div>
    );
};

export default PostWrittingCard;