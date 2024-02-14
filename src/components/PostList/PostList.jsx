import Post from "../Post/Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "../NewPost/NewPost.jsx";
import {useState} from "react";
import Modal from "../Modal/Modal.jsx";

function PostList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("")
    function bodyChangeHandeler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandeler(event) {
        setEnteredAuthor(event.target.value)
    }

    let modalContent;

    if (isPosting) {
        modalContent = (
            <Modal isVisible={isPosting} onClose={onStopPosting}>
                <NewPost onBodyChange={bodyChangeHandeler} onAuthorChange={authorChangeHandeler}/>
            </Modal>
        )
    }

    return (
        <>
            {modalContent}
            <ul className={classes.post}>
                <Post author={enteredAuthor} body={enteredBody}></Post>
                <Post author={"Alex"} body={"Salut les amis"}></Post>
                <Post author={"Alex"} body={"Salut les amis"}></Post>
            </ul>
        </>
    );
}

export default PostList