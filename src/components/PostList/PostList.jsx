import Post from "../Post/Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "../NewPost/NewPost.jsx";

function PostList() {
    const posts = [
        {author: "Alex", body: "Salut les amis"},
        {author: "Jean", body: "Salut les potes"},
        {author: "Pierre", body: "Comment ils vont ?"},
    ]
    const posts_elements = posts.map((post) => (
        <Post author={post.author} body={post.body}/>
    ));
    return (
        <>
            <NewPost/>
            <ul className={classes.post}>{posts_elements}</ul>
        </>
    );
}

export default PostList