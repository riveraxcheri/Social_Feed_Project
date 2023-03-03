// Step 3
// Within the Post component create a template of how you would like
// each individual post to be displayed. This will include the user’s name,
// the body of the post, and the “like” and “dislike” buttons.

// Step 8
// Lastly, you will need to build out the “like” and “dislike” functionality.
// Within the Post component,
// create 2 separate functions – one for when the “like” button is clicked,
// and one for when the “dislike” button is clicked.
// Bind these functions to their respective buttons onClick event.
// Within these functions,
// start to lay out the steps that need to occur when each button is clicked.
// import CreatePostForm from "../CreatePostForm/CreatePostForm";
import { useState } from "react";
import DislikeButton from "../DislikeButton/DislikeButton";
import LikeButton from "../LikeButton/LikeButton";

const Post = ({ entry }) => {
  const [isLiked, setIsLiked] = useState(entry.isLiked)
  const [isDisliked, setIsDisliked] = useState(entry.isDisliked)
  return (
    <li>
      <h3>{entry.date}</h3>
      <h2>{entry.name}</h2>
      <h3>{entry.text}</h3>
      <LikeButton message="Like" isLiked={isLiked} setIsLiked={setIsLiked} setIsDisliked={setIsDisliked}/> 
      <DislikeButton message="Dislike" isDisliked={isDisliked} setIsDisliked={setIsDisliked} setIsLiked={setIsLiked}/>
    </li>
  );
};

export default Post;
