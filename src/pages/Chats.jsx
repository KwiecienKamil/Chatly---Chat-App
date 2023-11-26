import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from 'react-chat-engine';

import { useAuth } from '../context/AuthContext';

const Chats = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  console.log(user)
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/")
  }
  return (
    <div>
      <div className="">
        <div className="">
        <button onClick={handleLogout} className='bg-red-400'>Logout</button>
        </div>
        <ChatEngine 
        height="calc(100vh - 80px)"
        projectId={import.meta.env.projectId}
        userName="."
        userSecret="."
        />
      </div>
    </div>
  )
}

export default Chats
