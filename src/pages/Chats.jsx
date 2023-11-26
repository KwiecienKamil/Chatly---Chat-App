import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";
import '../css/chatengine.css'

import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  // Getting image
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": import.meta.env.VITE_projectId,
          "user-name": user.email,
          "user-secret": user.uid,
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios.post('https://api.chatengine.io/users/',
          formData,{headers: {"private-key": import.meta.env.VITE_privateKey}}
          )
          .then(() => setLoading(false))
          .catch((error) => console.log(error))
        });
      });
  }, [user, navigate]);

  // if(!user || loading) return "Loading...";
  return (
    <div>
      <div >
        <div className="">
          <button onClick={handleLogout} className="bg-red-400">
            Logout
          </button>
        </div>
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={import.meta.env.VITE_projectId}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    </div>
  );
};

export default Chats;
