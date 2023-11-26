import React from 'react'
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Login = () => {
  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const authWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-messBlue'>
      <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
        <h1 className='text-[25px] pb-2 font-semibold'>Welcome to <span className='text-messBlue'>Chatly!</span></h1>
      <button 
      onClick={authWithGoogle} 
      className='flex items-center justify-center gap-2  bg-google px-2 py-2 rounded-xl text-white hover:brightness-[80%] duration-300'>
      <FaGoogle />Sign in with Google</button>
      <button 
      onClick={authWithFacebook} 
      className='flex items-center justify-center gap-2 bg-fb px-2 py-2 rounded-xl text-white hover:brightness-[80%] duration-300'>
      <FaFacebook />Sign in with Facebook</button>
      </div>
    </div>
  )
}

export default Login
