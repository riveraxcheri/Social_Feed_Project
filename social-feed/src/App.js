import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Components/PostList/PostList";


function App() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "2/25/2023",
      name: "Cheri Rivera",
      text: "This is my post.",
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 2,
      date: "2/25/2023",
      name: "name",
      text: "This is my second post.",
      isLiked: false,
      isDisliked: false,
    },
  ]);

  function addNewPost(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm entries={entries} addNewPostProperty={addNewPost}/>
      <PostList entries={entries} />
    </div>
  );
}

export default App;
