import PostList from "./components/PostList/PostList.jsx";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import {useState} from "react";

function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false)

    function showModalHandeler(event) {
        setModalIsVisible(true)
    }

    function hideModalHandeler(event) {
        setModalIsVisible(false)
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandeler}/>
            <main>
                <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandeler}/>
            </main>
        </>
    );

}

export default App;
