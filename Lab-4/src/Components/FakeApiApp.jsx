//Lab 4: Effects
//Author: Rebekah Driver
//Date: November 3, 2025
//1. FakeApiApp, this is the logical component of the app - brains of the operation
//All states, effects and functions start here

import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";


export default function FakeApiApp(){
    //Data source
    const data = "https://jsonplaceholder.typicode.com/posts";
    
    //to add a user friendly message for when the data is loading
    const [loading, setLoading] = useState(true);
    //Array to hold all original posts (and ones we add later)
    const [posts, setPosts] = useState([]);
    //For all submitted posts and resetting the form
    const [newPost, setNewPost] = useState({title: "", body: ""}); 
    
    //Stops posts from running on forever
    useEffect(() => {
        fetchPost();
    }, []);

    //To fetch the original data we use
    const fetchPost = async() => {
        const response = await fetch(data);
        const originalData = await response.json();
        setPosts(originalData);
        setLoading(false);
    }

    //Handle the change in the form inputs to display the changes happening
    const handleOnChange = (e) => {
        setNewPost((prevPost) => {
            return {
                ...prevPost,
                [e.target.name]: e.target.value,
            };
        });
    };

    //Handling the form submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        //Stores the data being entered into newPostData variable and adds a new id for it
        const newPostData = {
            id: posts.length + 1,
            title: newPost.title,
            body: newPost.body,
        };
        //This line should add new submissions to the top of the postings
        setPosts([newPostData, ...posts]);
        //Resetting for next submission
        setNewPost({
            title: "",
            body: "",
        });
    };
    
return (
    <div>
        <h1>Fake API App</h1>
        {loading && <h2>Loading...</h2>}
        <PostForm
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        newPost={newPost}
        />
        <PostsContainer 
        posts={posts}
        />
    </div>
);
}