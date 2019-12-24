import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let PostsElements =
        props.posts.map(p => <Post massage={p.message} likes={p.likesCount}/>);

    return <div className={s.myposts}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} placeholder="Write a post"/>
                </div>
                    <button onClick={onAddPost} className={s.btn1}>submit</button>
            </div>
        </div>
        {PostsElements}
    </div>
}

export default MyPosts;