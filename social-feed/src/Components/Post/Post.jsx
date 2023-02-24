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
import CreatePostForm from "../CreatePostForm/CreatePostForm";

const Post = (props) => {
    return ( 
        <div>
            <CreatePostForm />
        </div>
     );
}
 
export default Post;