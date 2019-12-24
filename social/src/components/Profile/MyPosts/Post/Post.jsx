import React from 'react';
import s from './Post.module.css';
import profile_pic from '../../ProfileInfo/profile-pic.jpg';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={profile_pic}/>
           {props.massage}
           <div>like {props.likes}</div>
        </div>
    )
}

export default Post;