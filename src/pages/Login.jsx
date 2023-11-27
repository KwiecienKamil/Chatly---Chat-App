import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider,} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-messBlue">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
        <h1 className="text-[25px] pb-2 font-semibold">
          Welcome to <span className="text-messBlue">Chatly!</span>
        </h1>
        <button
          onClick={authWithGoogle}
          className="flex items-center justify-center gap-2  bg-google px-2 py-2 rounded-xl text-white hover:brightness-[80%] duration-300"
        >
          <FaGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
