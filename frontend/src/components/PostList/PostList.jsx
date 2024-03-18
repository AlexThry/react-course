import Post from "../Post/Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "../NewPost/NewPost.jsx";
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': "application/json"
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    let modalContent;

    if (isPosting) {
        modalContent = (
            <Modal isVisible={isPosting} onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
            </Modal>
        )
    }

    return (
        <>
            {modalContent}
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