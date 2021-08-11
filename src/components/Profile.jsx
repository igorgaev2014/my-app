import React from 'react';
import './Profile.css';

const Profile = () => {
  return       <div className='content'>
  <div>
    <img src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1711&q=80" alt=""></img>
  </div>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU" alt=""></img>
  </div>
  <div>ava + description</div>
  <div>MY Posts
    <div>new post</div>
    <div className='posts'>
      <div className='item'>post 1</div>
      <div className='item'>post 2</div>
    </div>
  </div>
</div>

}

export default Profile;