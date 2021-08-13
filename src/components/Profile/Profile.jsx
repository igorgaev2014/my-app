import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (      
  <div className={s.content}>
    <div>
      <img src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1711&q=80" alt=""></img>
    </div>
    <div>ava + description</div>
    <MyPosts />
  </div>
  )
}

export default Profile;