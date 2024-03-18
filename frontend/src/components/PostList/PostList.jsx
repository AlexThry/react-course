import Post from "../Post/Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "../NewPost/NewPost.jsx";
import Modal from "../Modal/Modal.jsx";
import {useState, useEffect} from "react";

function PostList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const res = await fetch('http://localhost:8080/posts/');
            const resData = await res.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts().then(r => {
            console.log("posts loaded");
        });
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => console.log("post sended"))
            .catch(error => console.log({error}));
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal isVisible={isPosting} onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            )}
            {isFetching && (
                <div style={{textAlign: "center", color: "white"}}>
                    <h2>Chargement des posts.</h2>
                    <p>Veuillez patienter ...</p>
                </div>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.post}>
                    {posts.map((post, index) => <Post key={index} body={post.body} author={post.author}></Post>)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: "center", color: "white"}}>
                    <h2>Pas encore de posts.</h2>
                    <p>Commence à poster dès maintenant !</p>
                </div>
            )}
        </>
    );
}

export default PostList;