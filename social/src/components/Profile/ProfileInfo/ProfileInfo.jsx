import React from 'react';
import s from './ProfileInfo.module.css';
import profile_pic from './profile-pic.jpg';

const ProfileInfo = () => {
    return <div className={s.content}>
        <div><div className="prof_pic1"> <img src={profile_pic} className={s.prof_pic2} /></div>
            ava + desription
        </div>
    </div>
}

export default ProfileInfo;