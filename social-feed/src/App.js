// import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import Post from './Components/Post/Post';


function App() {

  // const [entries, setEntries]= useState([])

  return (
    <div>
      <NavBar />
      <CreatePostForm />
      <Post />
      <PostList />
    </div>
  );
}

export default App;
