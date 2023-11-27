import { initializeApp } from 'firebase/app'
import { getAuth} from 'firebase/auth';

export const firebaseConfig =  {
  apiKey: "AIzaSyAvl_3LPDDMDl4UqPJhIsi6eGpYTKd6rJw",
  authDomain: "chatapp-c8673.firebaseapp.com",
  projectId: "chatapp-c8673",
  storageBucket: "chatapp-c8673.appspot.com",
  messagingSenderId: "702407524861",
  appId: "1:702407524861:web:a7ec71b6f052016a625994",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

