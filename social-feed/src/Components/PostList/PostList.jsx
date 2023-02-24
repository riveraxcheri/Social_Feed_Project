// Step 5
// Within the PostList component, 
// create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 
// Then, utilize the “map” higher order array method to map each post to 
// its own Post component.
import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <div>
            <Post />
        </div>
     );
}
 
export default PostList;