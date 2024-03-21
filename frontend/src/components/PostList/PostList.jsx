import Post from "../Post/Post.jsx";
import classes from "./PostList.module.css"
import {useState, useEffect} from "react";
import {useLoaderData} from "react-router-dom";

function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.post}>
                    {posts.map((post, index) => <Post key={index} body={post.body} author={post.author}></Post>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: "center", color: "white"}}>
                    <h2>Pas encore de posts.</h2>
                    <p>Commence à poster dès maintenant !</p>
                </div>
            )}
        </>
    );
}

export default PostList;