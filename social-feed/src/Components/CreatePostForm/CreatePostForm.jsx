// Step 6
// Within the CreatePostForm component create a form with 2 input fields.
// There should be an input field for the user’s name,
// as well as the body of their post,
// and each should be bound to its own state variable.
// Step 7
// Implement a handleSubmit method for your form,
// which should pass the entered values to a function on the App.jsx component.
// That function should create a new post object,
// add it to the existing array of posts,
// and update the App.js state variable with the new array.

import { useState } from "react";

const CreatePostForm = (props) => {
  const [postName, setPostName] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postText, setPostText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formValuesObject = {
        id: props.entries.length + 1,
        name: postName,
        date: postDate,
        text: postText,
        isLiked: false,
        isDisliked: false,
    };
    console.log(formValuesObject);
    props.addNewPostProperty(formValuesObject);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Name: </label>
      <input
        type="text"
        value={postName}
        onChange={(event) => setPostName(event.target.value)}
      />
      <label> Date: </label>
      <input
        type="date"
        value={postDate}
        onChange={(event) => setPostDate(event.target.value)}
      />
      <label> Post: </label>
      <input
        type="text"
        value={postText}
        onChange={(event) => setPostText(event.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
